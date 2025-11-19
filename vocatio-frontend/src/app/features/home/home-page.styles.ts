export const homePageStyles = `
:host {
  display: block;
  min-height: 100vh;
  background: radial-gradient(circle at top, rgba(59, 130, 246, 0.25), transparent 30%), #030712;
  color: #e2e8f0;
}

.home-shell {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.home-hero {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.hero-copy {
  max-width: 480px;
}

.hero-copy h1 {
  font-size: clamp(2.5rem, 4vw, 3rem);
  margin-bottom: 0.5rem;
}

.hero-copy p {
  color: #94a3b8;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.primary-action,
.secondary-action {
  border-radius: 999px;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-action {
  border: none;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  color: #fff;
}

.primary-action:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 35px rgba(99, 102, 241, 0.35);
}

.secondary-action {
  background: transparent;
  border: 1px solid rgba(148, 163, 184, 0.6);
  color: #cbd5f5;
}

.secondary-action:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 25px rgba(148, 163, 184, 0.2);
}

.status-card {
  background: #0f172a;
  border-radius: 1rem;
  padding: 1.5rem;
  margin-top: 1rem;
  border: 1px solid rgba(148, 163, 184, 0.35);
}

.status-card h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #fbbf24;
}

.profile-panel {
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 1rem;
  padding: 1.5rem;
  width: min(360px, 100%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 20px 35px rgba(2, 6, 23, 0.35);
}

.profile-header h3 {
  margin: 0;
  font-size: 1.4rem;
}

.profile-email {
  margin: 0.25rem 0;
  color: #94a3b8;
  font-weight: 500;
}

.profile-meta {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  color: #cbd5f5;
  font-size: 0.95rem;
}

.profile-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.profile-feedback {
  margin: 0;
  color: #facc15;
  font-size: 0.9rem;
}

.profile-form {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-header h4 {
  margin: 0;
  font-size: 1rem;
}

.ghost {
  background: transparent;
  border: none;
  color: #a5b4fc;
  font-weight: 600;
  cursor: pointer;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: #cbd5f5;
}

.field input,
.field textarea {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.4);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  color: #f8fafc;
  font-size: 0.95rem;
}

.field textarea {
  min-height: 5rem;
  resize: vertical;
}

.field-error {
  color: #f87171;
  font-size: 0.75rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}

.danger-action {
  border-color: rgba(251, 113, 133, 0.5);
  color: #fecdd3;
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
}

header .subtitle {
  color: #94a3b8;
  margin-top: 0.25rem;
}

.resource-card {
  padding: 1.25rem;
  border-radius: 1rem;
  border: 1px solid rgba(148, 163, 184, 0.25);
  background: rgba(15, 23, 42, 0.8);
  box-shadow: 0 15px 30px rgba(2, 6, 23, 0.6);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.resource-card h4 {
  margin: 0;
  font-size: 1.1rem;
}

.resource-card p {
  margin: 0;
  color: #cbd5f5;
}

.resource-card small {
  color: #94a3b8;
}

.feedback {
  margin-top: 0.75rem;
  color: #fb7185;
}

@media (max-width: 720px) {
  .home-shell {
    padding: 1.5rem;
  }

  .home-hero {
    flex-direction: column;
  }
}
`;
