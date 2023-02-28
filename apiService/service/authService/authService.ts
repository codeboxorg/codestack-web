import { LoginForm } from '@pages/login/VLoginForm'
import { RegisterForm } from '@pages/register/VRegisterForm'

export interface AuthService {
  register(formData: RegisterForm): Promise<unknown>
  login(formData: LoginForm): Promise<LoginMember>
  logout(): Promise<unknown>
  member(): Promise<LoginMember>
}
