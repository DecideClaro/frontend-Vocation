import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TEST_ENDPOINTS } from '../constants/api.constants';
import { TestQuestion, TestSubmission, TestResult } from '../models/learning.models';

@Injectable({ providedIn: 'root' })
export class TestService {
  constructor(private http: HttpClient) {}

  fetchQuestions(): Observable<TestQuestion[]> {
    return this.http.get<TestQuestion[]>(TEST_ENDPOINTS.questions);
  }

  submitTest(submission: TestSubmission): Observable<TestResult> {
    return this.http.post<TestResult>(TEST_ENDPOINTS.submit, submission);
  }
}
