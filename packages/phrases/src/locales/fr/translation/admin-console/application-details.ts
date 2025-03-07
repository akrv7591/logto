const application_details = {
  page_title: "Détails de l'application",
  back_to_applications: 'Retour aux applications',
  check_guide: 'Consulter le guide',
  settings: 'Paramètres',
  settings_description:
    'Une "Application" est un logiciel ou un service enregistré qui peut accéder aux infos utilisateur ou agir pour un utilisateur. Les applications aident à reconnaître qui demande quoi à Logto et à gérer la connexion et les autorisations. Remplissez les champs requis pour l\'authentification.',
  integration: 'Intégration',
  integration_description:
    'Déployez avec les travailleurs sécurisés de Logto, alimentés par le réseau Edge de Cloudflare pour des performances de premier plan et des démarrages à froid de 0ms dans le monde entier.',
  service_configuration: 'Configuration du service',
  service_configuration_description: 'Complétez les configurations nécessaires dans votre service.',
  session: 'Session',
  endpoints_and_credentials: "Points de terminaison & Informations d'identification",
  endpoints_and_credentials_description:
    "Utilisez les points de terminaison et les informations d'identification suivants pour configurer la connexion OIDC dans votre application.",
  refresh_token_settings: 'Token de rafraîchissement',
  refresh_token_settings_description:
    'Gérez les règles du jeton de rafraîchissement pour cette application.',
  machine_logs: 'Journaux de machine',
  application_name: "Nom de l'application",
  application_name_placeholder: 'Mon App',
  description: 'Description',
  description_placeholder: 'Entrez la description de votre application',
  config_endpoint: 'Point de configuration du fournisseur OpenID',
  issuer_endpoint: 'Point de terminaison de l’émetteur',
  authorization_endpoint: "Point de terminaison d'autorisation",
  authorization_endpoint_tip:
    "Le point de terminaison pour effectuer l'authentification et l'autorisation. Il est utilisé pour <a>l'authentification</a> OpenID Connect.",
  show_endpoint_details: 'Afficher les détails du point de terminaison',
  hide_endpoint_details: 'Masquer les détails du point de terminaison',
  logto_endpoint: 'Point de terminaison Logto',
  application_id: "ID de l'application",
  application_id_tip:
    "L'identifiant d'application unique généralement généré par Logto. Il signifie également <a>client_id</a> dans OpenID Connect.",
  application_secret: "Secret de l'application",
  application_secret_other: 'Secrets de l’appli',
  redirect_uri: 'URI de redirection',
  redirect_uris: 'URIs de redirection',
  redirect_uri_placeholder: 'https://votre.site.com/app',
  redirect_uri_placeholder_native: 'io.logto://callback',
  redirect_uri_tip:
    "L'URI de redirection après la connexion d'un utilisateur (qu'elle soit réussie ou non). Voir OpenID Connect <a>AuthRequest</a> pour plus d'informations.",
  /** UNTRANSLATED */
  mixed_redirect_uri_warning:
    'Your application type is not compatible with at least one of the redirect URIs. It does not follow best practices and we strongly recommend keeping the redirect URIs consistent.',
  post_sign_out_redirect_uri: 'URI de redirection post-déconnexion',
  post_sign_out_redirect_uris: 'URI de redirection après la déconnexion',
  post_sign_out_redirect_uri_placeholder: 'https://votre.site.com/home',
  post_sign_out_redirect_uri_tip:
    "L'URI de redirection après la déconnexion de l'utilisateur (facultatif). Cela peut n'avoir aucun effet pratique dans certains types d'applications.",
  cors_allowed_origins: 'Origines CORS autorisées',
  cors_allowed_origins_placeholder: 'https://votre.site.com',
  cors_allowed_origins_tip:
    "Par défaut, toutes les origines des URI de redirection seront autorisées. En général, aucune action n'est requise pour ce champ. Consultez la documentation <a>MDN</a> pour des informations détaillées.",
  token_endpoint: 'Point de terminaison du jeton',
  user_info_endpoint: "Point de terminaison de l'utilisateur",
  enable_admin_access: "Activer l'accès administrateur",
  enable_admin_access_label:
    "Activer ou désactiver l'accès à l'API de gestion. Une fois activé, vous pouvez utiliser des jetons d'accès pour appeler l'API de gestion au nom de cette application.",
  always_issue_refresh_token: 'Toujours émettre le Refresh Token.',
  always_issue_refresh_token_label:
    "En activant cette configuration, Logto pourra toujours émettre des Refresh Tokens, indépendamment de la présentation ou non de la demande d'authentification `prompt=consent`. Cependant, cette pratique est découragée sauf si nécessaire, car elle n'est pas compatible avec OpenID Connect et peut potentiellement causer des problèmes.",
  refresh_token_ttl: 'Durée de vie du Refresh Token en jours',
  refresh_token_ttl_tip:
    "La durée pendant laquelle un Refresh Token peut être utilisé pour demander de nouveaux jetons d'accès avant qu'il n'expire et devienne invalide. Les demandes de jeton étendront la durée de vie du Refresh Token à cette valeur.",
  rotate_refresh_token: 'Tourner le Refresh Token',
  rotate_refresh_token_label:
    "Lorsqu'elle est activée, Logto émettra un nouveau Refresh Token pour les demandes de jeton lorsque 70% de la durée de vie (TTL) d'origine est écoulée ou que certaines conditions sont remplies. <a>En savoir plus</a>",
  /** UNTRANSLATED */
  rotate_refresh_token_label_for_public_clients:
    'When enabled, Logto will issue a new refresh token for each token request. <a>Learn more</a>',
  backchannel_logout: 'Déconnexion en backchannel',
  backchannel_logout_description:
    'Configurez le point de terminaison de déconnexion en backchannel OpenID Connect et si une session est requise pour cette application.',
  backchannel_logout_uri: 'URI de déconnexion en backchannel',
  backchannel_logout_uri_session_required: 'La session est-elle requise ?',
  backchannel_logout_uri_session_required_description:
    "Lorsqu'elle est activée, le RP exige qu'une réclamation `sid` (ID de session) soit incluse dans le jeton de déconnexion pour identifier la session RP avec l'OP lorsque l'`URI de déconnexion en backchannel` est utilisé.",
  delete_description:
    "Cette action ne peut être annulée. Elle supprimera définitivement l'application. Veuillez entrer le nom de l'application <span>{{nom}}</span> pour confirmer.",
  enter_your_application_name: 'Entrez le nom de votre application',
  application_deleted: "L'application {{name}} a été supprimée avec succès.",
  redirect_uri_required: 'Vous devez entrer au moins un URI de redirection.',
  app_domain_description_1:
    "N'hésitez pas à utiliser votre domaine avec {{domain}} alimenté par Logto, qui est valide en permanence.",
  app_domain_description_2:
    "N'hésitez pas à utiliser votre domaine <domain>{{domain}}</domain> qui est valide en permanence.",
  custom_rules: "Règles d'authentification personnalisées",
  custom_rules_placeholder: '^/(admin|privacy)/.+$',
  custom_rules_description:
    'Définissez des règles avec des expressions régulières pour les routes nécessitant une authentification. Par défaut : protection totale du site si laissé vide.',
  authentication_routes: "Routes d'authentification",
  custom_rules_tip:
    "Voici deux scénarios possibles :<ol><li>Pour protéger uniquement les routes '/admin' et '/privacy' avec une authentification : ^/(admin|privacy)/.*</li><li>Pour exclure les images JPG de l'authentification : ^(?!.*\\.jpg$).*$</li></ol>",
  authentication_routes_description:
    "Redirigez votre bouton d'authentification en utilisant les routes spécifiées. Remarque : Ces routes sont inchangeables.",
  protect_origin_server: "Protéger votre serveur d'origine",
  protect_origin_server_description:
    "Assurez-vous de protéger votre serveur d'origine contre un accès direct. Référez-vous au guide pour plus de <a>instructions détaillées</a>.",
  session_duration: 'Durée de la session (jours)',
  try_it: 'Essayez',
  no_organization_placeholder: 'Aucune organisation trouvée. <a>Aller aux organisations</a>',
  field_custom_data: 'Données personnalisées',
  field_custom_data_tip:
    'Informations supplémentaires personnalisées de l’application non listées dans les propriétés prédéfinies de l’application, telles que les paramètres et configurations spécifiques à l’entreprise.',
  custom_data_invalid: 'Les données personnalisées doivent être un objet JSON valide.',
  branding: {
    name: 'Marque',
    description:
      "Personnalisez le nom d'affichage et le logo de votre application sur l'écran de consentement.",
    description_third_party:
      "Personnalisez le nom d'affichage et le logo de votre application sur l'écran de consentement.",
    app_logo: 'Logo de l’application',
    app_level_sie: 'Expérience de connexion au niveau de l’application',
    app_level_sie_switch:
      'Activez l’expérience de connexion au niveau de l’application et configurez le branding spécifique à l’application. Si désactivée, l’expérience de connexion omni sera utilisée.',
    more_info: "Plus d'informations",
    more_info_description:
      "Offrez aux utilisateurs plus de détails sur votre application sur l'écran de consentement.",
    display_name: "Nom d'affichage",
    application_logo: 'Logo de l’application',
    application_logo_dark: 'Logo de l’application (sombre)',
    brand_color: 'Couleur de la marque',
    brand_color_dark: 'Couleur de la marque (sombre)',
    terms_of_use_url: "URL des conditions d'utilisation de l'application",
    privacy_policy_url: "URL de la politique de confidentialité de l'application",
  },
  permissions: {
    name: 'Permissions',
    description:
      "Sélectionnez les permissions requises par l'application tierce pour l'autorisation de l'utilisateur afin d'accéder à des types de données spécifiques.",
    user_permissions: "Données personnelles de l'utilisateur",
    organization_permissions: "Accès à l'organisation",
    table_name: 'Accorder des permissions',
    field_name: 'Permission',
    field_description: "Affiché à l'écran de consentement",
    delete_text: 'Supprimer la permission',
    permission_delete_confirm:
      'Cette action retirera les autorisations accordées à l’application tierce, l’empêchant de demander l’autorisation de l’utilisateur pour des types de données spécifiques. Êtes-vous sûr de vouloir continuer ?',
    permissions_assignment_description:
      "Sélectionnez les permissions demandées par l'application tierce pour l'autorisation de l'utilisateur afin d'accéder à des types de données spécifiques.",
    user_profile: 'Données utilisateur',
    api_permissions: "Permissions d'API",
    organization: "Permissions d'organisation",
    user_permissions_assignment_form_title: 'Ajouter les permissions du profil utilisateur',
    organization_permissions_assignment_form_title: "Ajouter les permissions de l'organisation",
    api_resource_permissions_assignment_form_title: "Ajouter les permissions des ressources d'API",
    user_data_permission_description_tips:
      'Vous pouvez modifier la description des permissions relatives aux données personnelles des utilisateurs via "Expérience de connexion > Contenu > Gérer la langue"',
    permission_description_tips:
      "Lorsque Logto est utilisé comme fournisseur d'identités (IdP) pour l'authentification dans des applications tierces, et que les utilisateurs doivent donner leur autorisation, cette description apparaît sur l'écran de consentement.",
    user_title: 'Utilisateur',
    user_description:
      "Sélectionnez les permissions demandées par l'application tierce pour accéder à des données utilisateur spécifiques.",
    grant_user_level_permissions: 'Accorder des permissions des données utilisateur',
    organization_title: 'Organisation',
    organization_description:
      "Sélectionnez les permissions demandées par l'application tierce pour accéder à des données d'organisation spécifiques.",
    grant_organization_level_permissions: "Accorder des permissions des données d'organisation",
  },
  roles: {
    assign_button: 'Attribuer des rôles de machine à machine',
    delete_description:
      'Cette action supprimera ce rôle de cette application machine-to-machine. Le rôle lui-même existera toujours, mais il ne sera plus associé à cette application machine-to-machine.',
    deleted: '{{name}} a été supprimé(e) avec succès de cet utilisateur.',
    assign_title: 'Attribuer des rôles de machine à machine à {{name}}',
    assign_subtitle:
      'Les applications entre machines doivent avoir des rôles de type machine à machine pour accéder aux ressources API associées.',
    assign_role_field: 'Attribuer des rôles de machine à machine',
    role_search_placeholder: 'Rechercher par nom de rôle',
    added_text: '{{value, number}} ajouté(s)',
    assigned_app_count: '{{value, number}} applications',
    confirm_assign: 'Attribuer des rôles de machine à machine',
    role_assigned: 'Rôle(s) attribué(e)s avec succès',
    search: 'Rechercher par nom de rôle, description ou ID',
    empty: 'Aucun rôle disponible',
  },
  secrets: {
    value: 'Valeur',
    empty: "L'application n'a aucun secret.",
    created_at: 'Créé à',
    expires_at: 'Expire à',
    never: 'Jamais',
    create_new_secret: 'Créer un nouveau secret',
    delete_confirmation:
      'Cette action ne peut pas être annulée. Êtes-vous sûr de vouloir supprimer ce secret ?',
    /** UNTRANSLATED */
    deleted: 'The secret has been successfully deleted.',
    /** UNTRANSLATED */
    activated: 'The secret has been successfully activated.',
    /** UNTRANSLATED */
    deactivated: 'The secret has been successfully deactivated.',
    legacy_secret: 'Secret hérité',
    expired: 'Expiré',
    expired_tooltip: 'Ce secret a expiré le {{date}}.',
    create_modal: {
      title: "Créer un secret d'application",
      expiration: 'Expiration',
      expiration_description: 'Le secret expirera le {{date}}.',
      expiration_description_never:
        "Le secret n'expirera jamais. Nous recommandons de définir une date d'expiration pour une sécurité renforcée.",
      days: '{{count}} jour',
      days_other: '{{count}} jours',
      /** UNTRANSLATED */
      years: '{{count}} year',
      /** UNTRANSLATED */
      years_other: '{{count}} years',
      created: 'Le secret {{name}} a été créé avec succès.',
    },
    edit_modal: {
      title: "Modifier le secret de l'application",
      edited: 'Le secret {{name}} a été modifié avec succès.',
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
