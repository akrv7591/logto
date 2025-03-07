const mfa = {
  title: '多因素身份验证',
  description: '添加多因素身份验证以提升您登录体验的安全性。',
  factors: '因素',
  multi_factors: '多因素',
  multi_factors_description: '用户需要验证启用的两步验证中的一个因素。',
  totp: '身份验证器应用 OTP',
  otp_description: '将Google Authenticator等链接，以验证一次性密码。',
  webauthn: 'WebAuthn（通行证）',
  webauthn_description: '通过浏览器支持的方法进行验证：生物识别、手机扫描或安全密钥等。',
  webauthn_native_tip: 'WebAuthn不支持原生应用。',
  webauthn_domain_tip:
    'WebAuthn将公钥绑定到特定域。修改服务域将阻止用户通过现有的密码进行身份验证。',
  backup_code: '备份代码',
  backup_code_description: '用户设置任何MFA方法后生成10个一次性备份代码。',
  backup_code_setup_hint: '当用户无法验证上述MFA因素时，请使用备份选项。',
  backup_code_error_hint: '要使用备份代码，您需要至少再添加一种MFA方法以成功验证用户。',
  policy: '策略',
  policy_description: '为登录和注册流程设置MFA策略。',
  two_step_sign_in_policy: '登录时的两步验证策略',
  user_controlled: '用户可以自行启用或禁用MFA',
  user_controlled_tip: '用户可以在首次登录或注册时跳过MFA设置，或在账户设置中启用/禁用MFA。',
  mandatory: '用户始终需要在登录时使用MFA',
  mandatory_tip: '用户必须在首次登录或注册时设置MFA，并在所有未来的登录中使用它。',
  /** UNTRANSLATED */
  require_mfa: 'Require MFA',
  /** UNTRANSLATED */
  require_mfa_label:
    'Enable this to make 2-step verification mandatory for accessing your applications. If disabled, users can decide whether to enable MFA for themselves.',
  /** UNTRANSLATED */
  set_up_prompt: 'MFA set-up prompt',
  /** UNTRANSLATED */
  no_prompt: 'Do not ask users to set up MFA',
  /** UNTRANSLATED */
  prompt_at_sign_in_and_sign_up:
    'Ask users to set up MFA during registration (skippable, one-time prompt)',
  /** UNTRANSLATED */
  prompt_only_at_sign_in:
    'Ask users to set up MFA on their next sign-in attempt after registration (skippable, one-time prompt)',
};

export default Object.freeze(mfa);
