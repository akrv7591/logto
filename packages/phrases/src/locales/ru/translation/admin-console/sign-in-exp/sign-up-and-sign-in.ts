const sign_up_and_sign_in = {
  identifiers_email: 'Адрес электронной почты',
  identifiers_phone: 'Номер телефона',
  identifiers_username: 'Имя пользователя',
  identifiers_email_or_sms: 'Адрес электронной почты или номер телефона',
  identifiers_none: 'Не применимо',
  and: 'и',
  or: 'или',
  sign_up: {
    title: 'РЕГИСТРАЦИЯ',
    sign_up_identifier: 'Идентификатор регистрации',
    identifier_description:
      'Идентификатор регистрации необходим для создания учетной записи и должен быть включен на экране входа в систему.',
    sign_up_authentication: 'Настройки аутентификации для регистрации',
    authentication_description:
      'Все выбранные действия будут обязательны для выполнения пользователем.',
    set_a_password_option: 'Создайте пароль',
    verify_at_sign_up_option: 'Подтвердить при регистрации',
    social_only_creation_description:
      '(Применяется только к созданию учетной записи в социальных сетях)',
  },
  sign_in: {
    title: 'ВХОД',
    sign_in_identifier_and_auth: 'Идентификатор и настройки аутентификации для входа',
    description:
      'Пользователи могут войти, используя любой из доступных вариантов. Настройте расположение, перетаскивая ниже указанные опции.',
    add_sign_in_method: 'Добавить способ входа',
    password_auth: 'Пароль',
    verification_code_auth: 'Код подтверждения',
    auth_swap_tip: 'Переставьте варианты ниже, чтобы определить, какой появится первым в потоке.',
    require_auth_factor: 'Вы должны выбрать хотя бы один фактор аутентификации.',
  },
  social_sign_in: {
    title: 'ВХОД С ПОМОЩЬЮ СОЦИАЛЬНЫХ СЕТЕЙ',
    social_sign_in: 'Вход через социальные сети',
    description:
      'В зависимости от обязательного идентификатора, который вы настроили, ваш пользователь может быть попрошен предоставить идентификатор при регистрации через социальный коннектор.',
    add_social_connector: 'Добавить социальный коннектор',
    set_up_hint: {
      not_in_list: 'Не найден в списке?',
      set_up_more: 'Настроить',
      go_to: 'другие социальные коннекторы.',
    },
    automatic_account_linking: 'Автоматическая привязка аккаунта',
    automatic_account_linking_label:
      'Когда включено, если пользователь входит в систему с новой для нее социальной идентичностью и существует ровно одна учетная запись с тем же идентификатором (например, электронная почта), Logto автоматически привяжет учетную запись к социальной идентичности, не запрашивая у пользователя привязку учетной записи.',
  },
  tip: {
    set_a_password: 'Уникальный пароль для вашего имени пользователя является обязательным.',
    verify_at_sign_up:
      'В настоящее время мы поддерживаем только подтвержденный электронный адрес. Ваша база пользователей может содержать большое количество адресов электронной почты низкого качества, если не производится проверка.',
    password_auth:
      'Это необходимо, так как вы включили опцию установки пароля в процессе регистрации.',
    verification_code_auth:
      'Это необходимо, так как вы включили только опцию предоставления кода подтверждения при регистрации. Вы можете снять флажок, когда установка пароля разрешена в процессе регистрации.',
    delete_sign_in_method:
      'Это необходимо, так как вы выбрали {{identifier}} в качестве обязательного идентификатора.',
  },
  advanced_options: {
    title: 'ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ',
    enable_single_sign_on: 'Включить единую авторизацию (SSO) для предприятий',
    enable_single_sign_on_description:
      'Включить возможность входа пользователей в систему с помощью единой авторизации с использованием их корпоративных учетных данных.',
    single_sign_on_hint: {
      prefix: 'Перейти в раздел ',
      link: '"Единая авторизация для предприятий"',
      suffix: ' для настройки дополнительных корпоративных коннекторов.',
    },
    enable_user_registration: 'Включить регистрацию пользователей',
    enable_user_registration_description:
      'Включить или отключить регистрацию пользователей. После отключения пользователи все равно могут быть добавлены через консоль администратора, но больше создавать учетные записи через пользовательский интерфейс регистрации не могут.',
    /** UNTRANSLATED */
    unknown_session_redirect_url: 'Unknown session redirect URL',
    /** UNTRANSLATED */
    unknown_session_redirect_url_tip:
      'Sometimes, Logto may not recognize a user’s session on the sign-in page, like when a session expires or the user bookmarks or shares the sign-in link. By default, an “unknown session” 404 error appears. To enhance user experience, set a fallback URL to redirect users back to your app and restart authentication.',
  },
};

export default Object.freeze(sign_up_and_sign_in);
