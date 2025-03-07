const application_details = {
  page_title: '應用程式詳情',
  back_to_applications: '返回全部應用程式',
  check_guide: '查看指南',
  settings: '設定',
  settings_description:
    '一個「應用程式」是一個註冊的軟體或服務，可以存取使用者資訊或代表使用者操作。應用程式有助於識別 Logto 的使用者要求的內容，並處理登入和權限。填寫所需的身份驗證欄位。',
  integration: '整合',
  integration_description:
    '使用 Logto 安全工作者，由 Cloudflare 的邊緣網路提供支持，實現頂級性能和全球 0 毫秒冷啟動。',
  service_configuration: '服務配置',
  service_configuration_description: '在您的服務中完成必要的配置。',
  session: '會話',
  endpoints_and_credentials: '端點與憑證',
  endpoints_and_credentials_description: '使用以下端點和憑證在您的應用程式中設置 OIDC 連接。',
  refresh_token_settings: '刷新令牌',
  refresh_token_settings_description: '管理此應用程式的刷新令牌規則。',
  machine_logs: '機器日誌',
  application_name: '應用程式名稱',
  application_name_placeholder: '我的應用程式',
  description: '描述',
  description_placeholder: '請輸入應用程式描述',
  config_endpoint: 'OpenID Provider 配置端點',
  issuer_endpoint: '發行者端點',
  authorization_endpoint: '授權端點',
  authorization_endpoint_tip: '進行驗證和授權的端點。用於 OpenID Connect 中的 <a>驗證</a> 流程。',
  show_endpoint_details: '顯示端點詳情',
  hide_endpoint_details: '隱藏端點詳情',
  logto_endpoint: 'Logto 端點',
  application_id: '應用程式 ID',
  application_id_tip:
    '應用程式的唯一標識，通常由 Logto 生成。等同於 OpenID Connect 中的 <a>client_id</a>。',
  application_secret: '應用程式密鑰',
  application_secret_other: '應用程式密鑰',
  redirect_uri: '重定向 URI',
  redirect_uris: '重定向 URI',
  redirect_uri_placeholder: 'https://your.website.com/app',
  redirect_uri_placeholder_native: 'io.logto://callback',
  redirect_uri_tip:
    '在使用者登入完成（不論成功與否）後重定向的目標 URI。參見 OpenID Connect <a>AuthRequest</a> 以瞭解更多。',
  /** UNTRANSLATED */
  mixed_redirect_uri_warning:
    'Your application type is not compatible with at least one of the redirect URIs. It does not follow best practices and we strongly recommend keeping the redirect URIs consistent.',
  post_sign_out_redirect_uri: '登出後重定向 URI',
  post_sign_out_redirect_uris: '登出後重定向 URI',
  post_sign_out_redirect_uri_placeholder: 'https://your.website.com/home',
  post_sign_out_redirect_uri_tip:
    '在使用者登出後重定向的目標 URI（可選）。在某些應用程式類型中可能無實質作用。',
  cors_allowed_origins: 'CORS 允許的來源',
  cors_allowed_origins_placeholder: 'https://your.website.com',
  cors_allowed_origins_tip:
    '所有重定向 URI 的來源將預設被允許。通常不需要對此欄位進行操作。參見 <a>MDN 文檔</a> 以瞭解更多。',
  token_endpoint: '令牌端點',
  user_info_endpoint: '用戶信息端點',
  enable_admin_access: '啟用管理訪問',
  enable_admin_access_label:
    '啟用或禁用對管理 API 的訪問。啟用後，你可以使用訪問權杖代表該應用程式調用管理 API。',
  always_issue_refresh_token: '始終發行刷新令牌',
  always_issue_refresh_token_label:
    '啟用此配置將允許 Logto 發行刷新令牌，無論是否在驗證請求中提供 `prompt=consent`。但是，除非必要，否則不建議這樣做，因為它不兼容 OpenID Connect，可能會引起問題。',
  refresh_token_ttl: '刷新令牌的有效期（天）',
  refresh_token_ttl_tip:
    '刷新令牌可用於在其過期之前請求新的訪問權杖的持續時間。訪問令牌將將默認的 TTL 延長到此值。',
  rotate_refresh_token: '旋轉刷新令牌',
  rotate_refresh_token_label:
    '啟用後，當原始 TTL 達到 70% 或滿足某些條件時就可以在令牌請求中為刷新令牌發行新的刷新令牌。 <a>了解更多。</a>',
  /** UNTRANSLATED */
  rotate_refresh_token_label_for_public_clients:
    'When enabled, Logto will issue a new refresh token for each token request. <a>Learn more</a>',
  backchannel_logout: '後台登出',
  backchannel_logout_description: '配置 OpenID Connect 後台登出端點及是否需要會話用於此應用程式。',
  backchannel_logout_uri: '後台登出 URI',
  backchannel_logout_uri_session_required: '是否需要會話？',
  backchannel_logout_uri_session_required_description:
    '啟用後，RP 要求在登出令牌中包含 `sid`（會話 ID）聲明，以便在使用 `backchannel_logout_uri` 時識別 RP 與 OP 的會話。',
  delete_description: '本操作會永久性地刪除該應用，且不可撤銷。輸入 <span>{{name}}</span> 確認。',
  enter_your_application_name: '輸入你的應用程式名稱',
  application_deleted: '應用 {{name}} 成功刪除。',
  redirect_uri_required: '至少需要輸入一個重定向 URL。',
  app_domain_description_1: '隨時使用由 Logto 提供支持的 {{domain}} 網域，它是永久有效的。',
  app_domain_description_2: '隨時使用您的網域 <domain>{{domain}}</domain>，它是永久有效的。',
  custom_rules: '自定義驗證規則',
  custom_rules_placeholder: '^/(admin|privacy)/.+$',
  custom_rules_description:
    '使用正則表達式設置需要驗證的路由規則。默認情況下：如果留空，將保護整個網站。',
  authentication_routes: '驗證路由',
  custom_rules_tip:
    "以下是兩個案例：<ol><li>只保護需要驗證的路由 '/admin' 和 '/privacy'：^/(admin|privacy)/.*</li><li>排除 JPG 圖片不需要驗證：^(?!.*\\.jpg$).*$</li></ol>",
  authentication_routes_description:
    '使用指定的路由重定向您的驗證按鈕。注意：這些路由是不可替代的。',
  protect_origin_server: '保護您的源伺服器',
  protect_origin_server_description:
    '確保保護您的源伺服器免受直接訪問。有關更多 <a>詳細指示</a>，請參見指南。',
  session_duration: '會話持續時間（天）',
  try_it: '試試看',
  no_organization_placeholder: '沒有找到組織。<a>前往組織</a>',
  field_custom_data: '自定義資料',
  field_custom_data_tip:
    '額外的自定義應用程式資訊，不在預定義的應用程式屬性中列出，例如業務特定的設定和配置。',
  custom_data_invalid: '自定義資料必須是一個有效的 JSON 對象',
  branding: {
    name: '品牌推廣',
    description: '在同意屏幕上自訂您應用程式的顯示名稱和標誌。',
    description_third_party: '自訂應用程式在同意屏幕上的顯示名稱和標誌。',
    app_logo: '應用程式標誌',
    app_level_sie: '應用程式級別的登入體驗',
    app_level_sie_switch:
      '啟用應用程式級別的登入體驗並設置應用程式特定的品牌推廣。禁用後，將使用全方位的登入體驗。',
    more_info: '更多資訊',
    more_info_description: '在同意屏幕上提供有關您應用程式的更多詳細資訊。',
    display_name: '顯示名稱',
    application_logo: '應用程式標誌',
    application_logo_dark: '應用程式標誌（深色模式）',
    brand_color: '品牌顏色',
    brand_color_dark: '品牌顏色（深色模式）',
    terms_of_use_url: '應用程式使用條款網址',
    privacy_policy_url: '應用程式隱私政策網址',
  },
  permissions: {
    name: '權限',
    description: '選擇第三方應用程式所需的權限，用於授權訪問特定數據類型的使用者。',
    user_permissions: '個人用戶數據',
    organization_permissions: '組織訪問',
    table_name: '授予權限',
    field_name: '權限',
    field_description: '在同意屏幕中顯示',
    delete_text: '刪除權限',
    permission_delete_confirm:
      '此操作將撤銷對第三方應用程式所授予的權限，防止其為特定數據類型請求用戶授權。是否確定要繼續？',
    permissions_assignment_description: '選擇第三方應用程式請求授權訪問特定數據類型所需的權限。',
    user_profile: '用戶數據',
    api_permissions: 'API 權限',
    organization: '組織權限',
    user_permissions_assignment_form_title: '添加用戶配置權限',
    organization_permissions_assignment_form_title: '添加組織權限',
    api_resource_permissions_assignment_form_title: '添加 API 資源權限',
    user_data_permission_description_tips:
      '你可以通過 "登入體驗 > 內容 > 管理語言" 修改個人用戶數據權限的描述',
    permission_description_tips:
      '當 Logto 用作第三方應用程式的身份提供者（IdP）用於授權時，以及用戶被要求授權時，此描述將在同意屏幕上顯示。',
    user_title: '用戶',
    user_description: '選擇第三方應用程式為存取特定用戶數據所需的權限。',
    grant_user_level_permissions: '授予用戶數據的權限',
    organization_title: '組織',
    organization_description: '選擇第三方應用程式為存取特定組織數據所需的權限。',
    grant_organization_level_permissions: '授予組織數據的權限',
  },
  roles: {
    assign_button: '分配機器對機器角色',
    delete_description:
      '該操作將從此機器對機器應用程式中刪除該角色。該角色本身仍然存在，但不再與此機器對機器應用程式相關聯。',
    deleted: '{{name}} 已成功從此使用者中刪除。',
    assign_title: '將機器對機器角色分配給 {{name}}',
    assign_subtitle: '機器對機器應用程式必須具有機器對機器類型的角色才能訪問相關的 API 資源。',
    assign_role_field: '分配機器對機器角色',
    role_search_placeholder: '按角色名稱搜索',
    added_text: '{{value, number}} 已添加',
    assigned_app_count: '{{value, number}} 個應用程式',
    confirm_assign: '分配機器對機器角色',
    role_assigned: '成功指派角色',
    search: '按角色名稱、描述或 ID 搜索',
    empty: '無可用角色',
  },
  secrets: {
    value: '值',
    empty: '應用程式目前沒有任何密鑰。',
    created_at: '創建於',
    expires_at: '到期於',
    never: '永不',
    create_new_secret: '創建新密鑰',
    delete_confirmation: '此操作無法撤銷。你確定要刪除此密鑰嗎？',
    /** UNTRANSLATED */
    deleted: 'The secret has been successfully deleted.',
    /** UNTRANSLATED */
    activated: 'The secret has been successfully activated.',
    /** UNTRANSLATED */
    deactivated: 'The secret has been successfully deactivated.',
    legacy_secret: '舊版密鑰',
    expired: '已過期',
    expired_tooltip: '此密鑰已於 {{date}} 過期。',
    create_modal: {
      title: '創建應用程式密鑰',
      expiration: '到期時間',
      expiration_description: '密鑰將於 {{date}} 到期。',
      expiration_description_never: '此密鑰將永不過期。我們建議設置到期日期以增強安全性。',
      days: '{{count}} 天',
      days_other: '{{count}} 天',
      /** UNTRANSLATED */
      years: '{{count}} year',
      /** UNTRANSLATED */
      years_other: '{{count}} years',
      created: '密鑰 {{name}} 已成功創建。',
    },
    edit_modal: {
      title: '編輯應用程式密鑰',
      edited: '密鑰 {{name}} 已成功編輯。',
    },
  },
  saml_idp_config: {
    /** UNTRANSLATED */
    title: 'SAML IdP metadata',
    /** UNTRANSLATED */
    description:
      'Use the following metadata and certificate to configure the SAML IdP in your application.',
    /** UNTRANSLATED */
    metadata_url_label: 'IdP metadata URL',
    /** UNTRANSLATED */
    single_sign_on_service_url_label: 'Single sign-on service URL',
    /** UNTRANSLATED */
    idp_entity_id_label: 'IdP entity ID',
  },
  saml_idp_certificates: {
    /** UNTRANSLATED */
    title: 'SAML signing certificate',
    /** UNTRANSLATED */
    expires_at: 'Expires at',
    /** UNTRANSLATED */
    finger_print: 'Fingerprint',
    /** UNTRANSLATED */
    status: 'Status',
    /** UNTRANSLATED */
    active: 'Active',
    /** UNTRANSLATED */
    inactive: 'Inactive',
  },
  saml_idp_name_id_format: {
    /** UNTRANSLATED */
    title: 'Name ID format',
    /** UNTRANSLATED */
    description: 'Select the name ID format of the SAML IdP.',
    /** UNTRANSLATED */
    persistent: 'Persistent',
    /** UNTRANSLATED */
    persistent_description: 'Use Logto user ID as Name ID',
    /** UNTRANSLATED */
    transient: 'Transient',
    /** UNTRANSLATED */
    transient_description: 'Use one-time user ID as Name ID',
    /** UNTRANSLATED */
    unspecified: 'Unspecified',
    /** UNTRANSLATED */
    unspecified_description: 'Use Logto user ID as Name ID',
    /** UNTRANSLATED */
    email_address: 'Email address',
    /** UNTRANSLATED */
    email_address_description: 'Use email address as Name ID',
  },
  saml_encryption_config: {
    /** UNTRANSLATED */
    encrypt_assertion: 'Encrypt SAML assertion',
    /** UNTRANSLATED */
    encrypt_assertion_description: 'By enabling this option, the SAML assertion will be encrypted.',
    /** UNTRANSLATED */
    encrypt_then_sign: 'Encrypt then sign',
    /** UNTRANSLATED */
    encrypt_then_sign_description:
      'By enabling this option, the SAML assertion will be encrypted and then signed; otherwise, the SAML assertion will be signed and then encrypted.',
    /** UNTRANSLATED */
    certificate: 'Certificate',
    /** UNTRANSLATED */
    certificate_tooltip:
      'Copy and paste the x509 certificate you get from your service provider to encrypt the SAML assertion.',
    /** UNTRANSLATED */
    certificate_placeholder:
      '-----BEGIN CERTIFICATE-----\nMIICYDCCAcmgAwIBA...\n-----END CERTIFICATE-----\n',
    /** UNTRANSLATED */
    certificate_missing_error: 'Certificate is required.',
    /** UNTRANSLATED */
    certificate_invalid_format_error:
      'Invalid certificate format detected. Please check the certificate format and try again.',
  },
  saml_app_attribute_mapping: {
    /** UNTRANSLATED */
    name: 'Attribute mappings',
    /** UNTRANSLATED */
    title: 'Base attribute mappings',
    /** UNTRANSLATED */
    description: 'Add attribute mappings to sync user profile from Logto to your application.',
    /** UNTRANSLATED */
    col_logto_claims: 'Value of Logto',
    /** UNTRANSLATED */
    col_sp_claims: 'Value name of your application',
    /** UNTRANSLATED */
    add_button: 'Add another',
  },
};

export default Object.freeze(application_details);
