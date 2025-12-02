import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { PROFILE_ENDPOINTS } from '../constants/api.constants';
import {
  AccountDeletionPayload,
  AccountDeletionResponse,
  ProfilePatchPayload,
  ProfileUpdatePayload,
  UserProfile
} from '../validators/models/profile.models';
import { SessionService } from './session.service';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(private http: HttpClient, private session: SessionService) {}

  // Estado compartido de perfil
  private _profile$ = new BehaviorSubject<UserProfile | undefined>(undefined);
  readonly profile$ = this._profile$.asObservable();
  setProfile(p?: UserProfile) { this._profile$.next(p); }

  private authHeaders(): { headers?: HttpHeaders } {
    const token = this.session.getAccessToken();
    if (!token) return {};
    return { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) };
  }

  fetchProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(PROFILE_ENDPOINTS.me, this.authHeaders()).pipe(
      tap(p => this.setProfile(p))
    );
  }

  updateProfile(payload: ProfileUpdatePayload): Observable<{ message: string; profile: UserProfile }> {
    return this.http.put<{ message: string; profile: UserProfile }>(PROFILE_ENDPOINTS.me, payload, this.authHeaders()).pipe(
      tap(res => this.setProfile(res.profile))
    );
  }

  patchPersonalData(payload: ProfilePatchPayload): Observable<{ message: string; profile: UserProfile }> {
    return this.http.patch<{ message: string; profile: UserProfile }>(PROFILE_ENDPOINTS.me, payload, this.authHeaders()).pipe(
      tap(res => this.setProfile(res.profile))
    );
  }

  deleteAccount(payload: AccountDeletionPayload): Observable<AccountDeletionResponse> {
    const auth = this.authHeaders();
    return this.http.delete<AccountDeletionResponse>(PROFILE_ENDPOINTS.me, { body: payload, ...(auth || {}) });
  }
}
