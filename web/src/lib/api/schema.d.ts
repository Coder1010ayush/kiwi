export type paths = {
    "/v1/hello/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Hello */
        get: operations["hello_v1_hello__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Return User And Session
         * @description Returns Auth Response (User and Session)
         *     :return: AuthResponse
         */
        post: operations["return_user_and_session_v1_auth__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Return Token
         * @description OAuth2 endpoint
         *     signs in user(username/password) and returns JWT token
         *     :return: BearerToken
         */
        post: operations["return_token_v1_auth_token_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/token/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Test Auth Access Token */
        post: operations["test_auth_access_token_v1_auth_token_test_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/creds/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Test Auth Creds */
        post: operations["test_auth_creds_v1_auth_creds_test_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/password/reset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Reset Password Email */
        post: operations["reset_password_email_v1_auth_password_reset_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/session/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Refresh Password Email */
        post: operations["refresh_password_email_v1_auth_session_refresh_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update User */
        put: operations["update_user_v1_auth_user_put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/confirm": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Confirm User */
        get: operations["confirm_user_v1_auth_confirm_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/app-creds/types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Types */
        get: operations["get_types_v1_app_creds_types_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/app-creds/types/{app}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Creds Types */
        get: operations["get_creds_types_v1_app_creds_types__app__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/app-creds/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List App Creds */
        get: operations["list_app_creds_v1_app_creds__get"];
        put?: never;
        /** Create App Creds */
        post: operations["create_app_creds_v1_app_creds__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/app-creds/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get App Creds */
        get: operations["get_app_creds_v1_app_creds__id__get"];
        /** Update App Creds */
        put: operations["update_app_creds_v1_app_creds__id__put"];
        post?: never;
        /** Delete App Creds */
        delete: operations["delete_app_creds_v1_app_creds__id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/app-auth/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List App Auth */
        get: operations["list_app_auth_v1_app_auth__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/app-auth/sync": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Sync App Auth */
        get: operations["sync_app_auth_v1_app_auth_sync_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/app-auth/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete App Auth */
        delete: operations["delete_app_auth_v1_app_auth__id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/app-auth/{app_name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Refresh App Auth */
        get: operations["refresh_app_auth_v1_app_auth__app_name__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/intuit/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Oauth Url */
        get: operations["oauth_url_v1_auth_intuit_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/intuit/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Oauth Redirect */
        get: operations["oauth_redirect_v1_auth_intuit_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/google/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Google Oauth Url */
        get: operations["google_oauth_url_v1_auth_google_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/google/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Google Callback */
        get: operations["google_callback_v1_auth_google_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/looker/client-credentials": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Looker Client Credentials
         * @description Authenticate using Looker client credentials flow.
         *     This is for server-to-server authentication using the /api/4.0/login endpoint.
         */
        post: operations["looker_client_credentials_v1_auth_looker_client_credentials_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/salesforce/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Salesforce Oauth Url */
        get: operations["salesforce_oauth_url_v1_auth_salesforce_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/salesforce/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Salesforce Callback */
        get: operations["salesforce_callback_v1_auth_salesforce_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/outlook/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Outlook Oauth Url */
        get: operations["outlook_oauth_url_v1_auth_outlook_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/outlook/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Outlook Callback */
        get: operations["outlook_callback_v1_auth_outlook_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/box/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Box Oauth Url */
        get: operations["box_oauth_url_v1_auth_box_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/box/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Box Callback */
        get: operations["box_callback_v1_auth_box_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/slack/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Slack Oauth Url */
        get: operations["slack_oauth_url_v1_auth_slack_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/slack/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Slack Oauth Callback */
        get: operations["slack_oauth_callback_v1_auth_slack_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/whatsapp/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Whatsapp Oauth Url */
        get: operations["whatsapp_oauth_url_v1_auth_whatsapp_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/whatsapp/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Whatsapp Oauth Callback */
        get: operations["whatsapp_oauth_callback_v1_auth_whatsapp_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/zoom/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Zoom Oauth Url */
        get: operations["zoom_oauth_url_v1_auth_zoom_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/zoom/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Zoom Oauth Callback */
        get: operations["zoom_oauth_callback_v1_auth_zoom_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/dropbox/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Dropbox Oauth Url */
        get: operations["dropbox_oauth_url_v1_auth_dropbox_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/dropbox/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Dropbox Callback */
        get: operations["dropbox_callback_v1_auth_dropbox_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/actions/types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Action Types */
        get: operations["get_action_types_v1_actions_types_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/actions_types/{action_type}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Action Type Objects */
        get: operations["get_action_type_objects_v1_actions_types__action_type__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/actions/tools": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Action Tools */
        get: operations["list_action_tools_v1_actions_tools_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/actions/mcp_tools": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Mcp Action Tools */
        get: operations["list_mcp_action_tools_v1_actions_mcp_tools_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/actions/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Actions */
        get: operations["list_actions_v1_actions__get"];
        put?: never;
        /** Create Action */
        post: operations["create_action_v1_actions__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/actions/system_actions/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List System Actions */
        get: operations["list_system_actions_v1_actions_system_actions__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/actions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Action */
        get: operations["get_action_v1_actions__id__get"];
        /** Update Action */
        put: operations["update_action_v1_actions__id__put"];
        post?: never;
        /** Delete Action */
        delete: operations["delete_action_v1_actions__id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/actions/search/text": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Search Actions */
        get: operations["search_actions_v1_actions_search_text_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/actions/{id}/run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Run Action */
        post: operations["run_action_v1_actions__id__run_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/actions/{id}/run_stream": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Run Action Stream */
        post: operations["run_action_stream_v1_actions__id__run_stream_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/actions/{id}/async_run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Async Run Action */
        post: operations["async_run_action_v1_actions__id__async_run_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/actions/{id}/async_run_loop": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Async Run Action Loop */
        post: operations["async_run_action_loop_v1_actions__id__async_run_loop_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/actions/async_run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Async Run Action Doc */
        post: operations["async_run_action_doc_v1_actions_async_run_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/actions/{id}/batch_run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Batch Run Action */
        post: operations["batch_run_action_v1_actions__id__batch_run_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/actions/clone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Clone Action */
        post: operations["clone_action_v1_actions_clone_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_types/multimodal/assistant_openai": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Action Multimodal Assistant Openai */
        post: operations["create_action_multimodal_assistant_openai_v1_action_types_multimodal_assistant_openai_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_types/text2text/llm_chat_openai": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Action Text2Text Llm Chat Openai */
        post: operations["create_action_text2text_llm_chat_openai_v1_action_types_text2text_llm_chat_openai_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_types/text2text/read_url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Action Text2Text Read Url */
        post: operations["create_action_text2text_read_url_v1_action_types_text2text_read_url_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_types/text2text/search_web": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Action Text2Text Search Web */
        post: operations["create_action_text2text_search_web_v1_action_types_text2text_search_web_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_types/text2text/user_input": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Action Text2Text User Input */
        post: operations["create_action_text2text_user_input_v1_action_types_text2text_user_input_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_types/text2img/dalle_openai": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Text2Img Dalle Openai */
        post: operations["create_text2img_dalle_openai_v1_action_types_text2img_dalle_openai_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_types/text2img/dalle_openai/{action_id}/run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Run Text2Img Dalle Openai */
        post: operations["run_text2img_dalle_openai_v1_action_types_text2img_dalle_openai__action_id__run_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_types/img2img/edit_openai": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Img2Img Edit Openai */
        post: operations["create_img2img_edit_openai_v1_action_types_img2img_edit_openai_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_types/img2img/variation_openai": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Img2Img Edit Openai */
        post: operations["create_img2img_edit_openai_v1_action_types_img2img_variation_openai_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_types/text2audio/speech_openai": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Action Text2Audio Speech Openai */
        post: operations["create_action_text2audio_speech_openai_v1_action_types_text2audio_speech_openai_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_types/audio2text/transcription_openai": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Action Audio2Text Transcription Openai */
        post: operations["create_action_audio2text_transcription_openai_v1_action_types_audio2text_transcription_openai_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_types/audio2text/translation_openai": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Action Audio2Text Translation Openai */
        post: operations["create_action_audio2text_translation_openai_v1_action_types_audio2text_translation_openai_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_results/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Action Result */
        get: operations["list_action_result_v1_action_results__get"];
        /** Update Action Result */
        put: operations["update_action_result_v1_action_results__put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_results/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Action Result */
        get: operations["get_action_result_v1_action_results__id__get"];
        put?: never;
        post?: never;
        /** Delete Action Result */
        delete: operations["delete_action_result_v1_action_results__id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_results/search/text": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Search Action Results */
        get: operations["search_action_results_v1_action_results_search_text_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/characters/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Characters */
        get: operations["list_characters_v1_characters__get"];
        put?: never;
        /** Create Character */
        post: operations["create_character_v1_characters__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/characters/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Character */
        get: operations["get_character_v1_characters__id__get"];
        /** Update Character */
        put: operations["update_character_v1_characters__id__put"];
        post?: never;
        /** Delete Character */
        delete: operations["delete_character_v1_characters__id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/prompts/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Prompts */
        get: operations["list_prompts_v1_prompts__get"];
        put?: never;
        /** Create Prompt */
        post: operations["create_prompt_v1_prompts__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/prompts/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Prompt */
        get: operations["get_prompt_v1_prompts__id__get"];
        /** Update Prompt */
        put: operations["update_prompt_v1_prompts__id__put"];
        post?: never;
        /** Delete Prompt */
        delete: operations["delete_prompt_v1_prompts__id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/teams/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Teams */
        get: operations["list_teams_v1_teams__get"];
        put?: never;
        /** Create Team */
        post: operations["create_team_v1_teams__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/teams/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Team */
        get: operations["get_team_v1_teams__id__get"];
        /** Update Team */
        put: operations["update_team_v1_teams__id__put"];
        post?: never;
        /** Delete Team */
        delete: operations["delete_team_v1_teams__id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_chats/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Chat */
        get: operations["list_chat_v1_action_chats__get"];
        put?: never;
        /** Create Chat */
        post: operations["create_chat_v1_action_chats__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_chats/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Chat */
        get: operations["get_chat_v1_action_chats__id__get"];
        /** Update Chat */
        put: operations["update_chat_v1_action_chats__id__put"];
        /** Chat */
        post: operations["chat_v1_action_chats__id__post"];
        /** Delete Chat */
        delete: operations["delete_chat_v1_action_chats__id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/mcps/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Mcps */
        get: operations["list_mcps_v1_mcps__get"];
        put?: never;
        /** Create Mcp */
        post: operations["create_mcp_v1_mcps__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/mcps/{mcp_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Mcp */
        get: operations["get_mcp_v1_mcps__mcp_id__get"];
        /** Update Mcp */
        put: operations["update_mcp_v1_mcps__mcp_id__put"];
        post?: never;
        /** Delete Mcp */
        delete: operations["delete_mcp_v1_mcps__mcp_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/mcps/by_name/{mcp_server_name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Mcp By Server Name */
        get: operations["get_mcp_by_server_name_v1_mcps_by_name__mcp_server_name__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_graphs/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Action Graphs */
        get: operations["list_action_graphs_v1_action_graphs__get"];
        put?: never;
        /** Create Action Graph */
        post: operations["create_action_graph_v1_action_graphs__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_graphs/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Action Graph */
        get: operations["get_action_graph_v1_action_graphs__id__get"];
        /** Update Action Graph */
        put: operations["update_action_graph_v1_action_graphs__id__put"];
        post?: never;
        /** Delete Action Graph */
        delete: operations["delete_action_graph_v1_action_graphs__id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_graphs/search/text": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Search Action Graphs */
        get: operations["search_action_graphs_v1_action_graphs_search_text_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_graphs/{id}/async_run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Async Run Action Graph */
        post: operations["async_run_action_graph_v1_action_graphs__id__async_run_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_graphs/{id}/batch_run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Batch Run Action Graph */
        post: operations["batch_run_action_graph_v1_action_graphs__id__batch_run_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_graphs/{action_graph_id}/run_group_chat": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Run Group Chat */
        post: operations["run_group_chat_v1_action_graphs__action_graph_id__run_group_chat_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_graphs_results/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Action Graph Result */
        get: operations["list_action_graph_result_v1_action_graphs_results__get"];
        /** Update Action Graph Result */
        put: operations["update_action_graph_result_v1_action_graphs_results__put"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_graphs_results/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Action Graph Result */
        get: operations["get_action_graph_result_v1_action_graphs_results__id__get"];
        put?: never;
        post?: never;
        /** Delete Action Graph Result */
        delete: operations["delete_action_graph_result_v1_action_graphs_results__id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/action_graphs_results/search/text": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Search Action Graph Results */
        get: operations["search_action_graph_results_v1_action_graphs_results_search_text_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/event_results/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Event Result */
        get: operations["get_event_result_v1_event_results__id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/schedules/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Schedules */
        get: operations["list_schedules_v1_schedules__get"];
        put?: never;
        /** Create Schedule */
        post: operations["create_schedule_v1_schedules__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/schedules/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Schedule */
        get: operations["get_schedule_v1_schedules__id__get"];
        /** Update Schedule */
        put: operations["update_schedule_v1_schedules__id__put"];
        post?: never;
        /** Delete Schedule */
        delete: operations["delete_schedule_v1_schedules__id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/files/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Files */
        get: operations["get_files_v1_files__get"];
        put?: never;
        /** Upload Files */
        post: operations["upload_files_v1_files__post"];
        /** Delete Files */
        delete: operations["delete_files_v1_files__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/files/public/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Upload Public Files */
        post: operations["upload_public_files_v1_files_public__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/files/process": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Process Files */
        post: operations["process_files_v1_files_process_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/files/s3_files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Files S3 Async */
        get: operations["get_files_s3_async_v1_files_s3_files_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/ingestion/file/async": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Ingest File Async
         * @description [V2] Accepts a file for high-priority ingestion into the user's permanent knowledge base.
         *     1. Persists the file to the user's permanent S3 folder (e.g., files/<user_id>/).
         *     2. Stages a copy for the ingestion worker.
         *     3. Queues a job in Redis for the 'synced_files' collection.
         *     4. Logs the file in 'processed_files_log' to prevent duplicate ingestion by the nightly cron job.
         */
        post: operations["ingest_file_async_v1_ingestion_file_async_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/ingestion/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List ingested files
         * @description [Proxy] Forwards the request to the Ingestion Worker Service.
         */
        get: operations["list_ingested_files_proxy_v1_ingestion_files_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/ingestion/kb/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Kbs Proxy
         * @description List knowledge bases the user has access to.
         */
        get: operations["list_kbs_proxy_v1_ingestion_kb__get"];
        put?: never;
        /**
         * Create Kb Proxy
         * @description Create a new knowledge base.
         */
        post: operations["create_kb_proxy_v1_ingestion_kb__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/ingestion/kb/{kb_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Kb Proxy
         * @description Get details of a specific knowledge base.
         */
        get: operations["get_kb_proxy_v1_ingestion_kb__kb_id__get"];
        put?: never;
        post?: never;
        /**
         * Delete Kb Proxy
         * @description Delete KB.
         */
        delete: operations["delete_kb_proxy_v1_ingestion_kb__kb_id__delete"];
        options?: never;
        head?: never;
        /**
         * Update Kb Proxy
         * @description Update KB details.
         */
        patch: operations["update_kb_proxy_v1_ingestion_kb__kb_id__patch"];
        trace?: never;
    };
    "/v1/ingestion/kb/{kb_id}/members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Kb Members Proxy
         * @description List members of a knowledge base.
         */
        get: operations["list_kb_members_proxy_v1_ingestion_kb__kb_id__members_get"];
        put?: never;
        /**
         * Add Kb Member Proxy
         * @description Add or update a member in a knowledge base.
         */
        post: operations["add_kb_member_proxy_v1_ingestion_kb__kb_id__members_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/ingestion/kb/{kb_id}/members/by-email": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add Kb Member By Email Proxy
         * @description Add or update a member by email.
         */
        post: operations["add_kb_member_by_email_proxy_v1_ingestion_kb__kb_id__members_by_email_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/ingestion/kb/{kb_id}/members/bulk-by-email": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add Kb Members Bulk By Email Proxy
         * @description Bulk add or update members by email.
         */
        post: operations["add_kb_members_bulk_by_email_proxy_v1_ingestion_kb__kb_id__members_bulk_by_email_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/ingestion/kb/{kb_id}/members/{member_user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Remove Kb Member Proxy
         * @description Remove a member from a knowledge base.
         */
        delete: operations["remove_kb_member_proxy_v1_ingestion_kb__kb_id__members__member_user_id__delete"];
        options?: never;
        head?: never;
        /**
         * Update Kb Member Proxy
         * @description Update a member's role.
         */
        patch: operations["update_kb_member_proxy_v1_ingestion_kb__kb_id__members__member_user_id__patch"];
        trace?: never;
    };
    "/v1/vectorstore/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Datastore */
        get: operations["list_datastore_v1_vectorstore__get"];
        put?: never;
        /** Create Datastore */
        post: operations["create_datastore_v1_vectorstore__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/vectorstore/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Datastore */
        get: operations["get_datastore_v1_vectorstore__name__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/vectorstore/{id}/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Search */
        post: operations["search_v1_vectorstore__id__search_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/vectorstore/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Datastore */
        delete: operations["delete_datastore_v1_vectorstore__id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/vectorstore/result/{datastore_put_result_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Datastore Put Result */
        get: operations["get_datastore_put_result_v1_vectorstore_result__datastore_put_result_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/vectorstore/v2/collections/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * V2 List Collections
         * @description List all Weaviate-backed collections
         */
        get: operations["v2_list_collections_v1_vectorstore_v2_collections__get"];
        put?: never;
        /**
         * V2 Create Collection
         * @description Create a new Weaviate-backed collection
         */
        post: operations["v2_create_collection_v1_vectorstore_v2_collections__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/vectorstore/v2/collections/{collection_name}/files/async": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * V2 Ingest File Into Collection
         * @description Ingest a file into a Weaviate collection
         */
        post: operations["v2_ingest_file_into_collection_v1_vectorstore_v2_collections__collection_name__files_async_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/vectorstore/v2/collections/{collection_name}/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * V2 Search Collection
         * @description Search a Weaviate-backed collection
         */
        post: operations["v2_search_collection_v1_vectorstore_v2_collections__collection_name__search_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/vectorstore/v2/collections/{collection_name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * V2 Delete Collection
         * @description Delete a Weaviate-backed collection
         */
        delete: operations["v2_delete_collection_v1_vectorstore_v2_collections__collection_name__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/openai_storage/files/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get File Info */
        get: operations["get_file_info_v1_openai_storage_files__get"];
        put?: never;
        /** Upload File */
        post: operations["upload_file_v1_openai_storage_files__post"];
        /** Delete File */
        delete: operations["delete_file_v1_openai_storage_files__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/openai_storage/files/azure": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Upload File On Azure */
        post: operations["upload_file_on_azure_v1_openai_storage_files_azure_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/openai_storage/files/openai": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Upload File On Openai */
        post: operations["upload_file_on_openai_v1_openai_storage_files_openai_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/openai_storage/files/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Files Info */
        get: operations["list_files_info_v1_openai_storage_files_list_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/openai_storage/files/content": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get File */
        get: operations["get_file_v1_openai_storage_files_content_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/openai_storage/vector_stores/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Vector Store */
        get: operations["get_vector_store_v1_openai_storage_vector_stores__get"];
        /** Update Vector Store */
        put: operations["update_vector_store_v1_openai_storage_vector_stores__put"];
        /** Create Vector Store */
        post: operations["create_vector_store_v1_openai_storage_vector_stores__post"];
        /** Delete Vector Store */
        delete: operations["delete_vector_store_v1_openai_storage_vector_stores__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/openai_storage/vector_stores/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Vector Stores */
        get: operations["list_vector_stores_v1_openai_storage_vector_stores_list_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/openai_storage/vector_store_file_batches/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Vector Store Files */
        get: operations["get_vector_store_files_v1_openai_storage_vector_store_file_batches__get"];
        put?: never;
        /** Create Vector Store Files */
        post: operations["create_vector_store_files_v1_openai_storage_vector_store_file_batches__post"];
        /** Delete Vector Store Files */
        delete: operations["delete_vector_store_files_v1_openai_storage_vector_store_file_batches__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/openai_storage/vector_store_file_batches/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Vector Store Files */
        get: operations["list_vector_store_files_v1_openai_storage_vector_store_file_batches_list_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/openai_storage/vector_store_files/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Vector Store Files */
        post: operations["create_vector_store_files_v1_openai_storage_vector_store_files__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/openai_storage/vector_store_files/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Vector Store Files */
        get: operations["list_vector_store_files_v1_openai_storage_vector_store_files_list_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/agents/react": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Run React Agent */
        post: operations["run_react_agent_v1_agents_react_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/agents/act": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Run Act Agent */
        post: operations["run_act_agent_v1_agents_act_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/webhooks/zendesk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Zendesk Webhook */
        post: operations["zendesk_webhook_v1_webhooks_zendesk_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/webhooks/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Webhook */
        get: operations["list_webhook_v1_webhooks__get"];
        /** Update Webhook */
        put: operations["update_webhook_v1_webhooks__put"];
        /** Create Webhook */
        post: operations["create_webhook_v1_webhooks__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/webhooks/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Webhook */
        get: operations["get_webhook_v1_webhooks__id__get"];
        put?: never;
        post?: never;
        /** Delete Webhook */
        delete: operations["delete_webhook_v1_webhooks__id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/webhooks/event/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Run Webhook Event */
        post: operations["run_webhook_event_v1_webhooks_event__id__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/webhooks/slack/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Slack Events */
        post: operations["slack_events_v1_webhooks_slack_events_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/webhooks/slack/command": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Run Slack Cmd
         * @description commands:
         *     /kiwi "user msg"
         *     /kiwi "/name/ usr msg"
         *     <name> is name of Action or Action Graph
         */
        post: operations["run_slack_cmd_v1_webhooks_slack_command_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/webhooks/siri/shortcuts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Siri Automation Command
         * @description Authenticate with email/password, fetch the latest published system Action,
         *     and run it in the background with the provided text `command`.
         *
         *     Immediate response: {"ok": True, "message": "working on it"}
         *     On invalid auth: 401 with "Invalid credential is given"
         */
        post: operations["siri_automation_command_v1_webhooks_siri_shortcuts_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/server_sent_events/stream/{topic}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Stream Sse
         * @description SSE endpoint that subscribes to a given Redis topic.
         *     Demonstrates how to handle client disconnect by catching asyncio.CancelledError.
         */
        get: operations["stream_sse_v1_server_sent_events_stream__topic__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/server_sent_events/streaming/{topic}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Streaming Ndjson
         * @description NDJSON streaming endpoint that subscribes to a given Redis topic.
         *     Sends one JSON object per line. Includes periodic heartbeats to keep LB alive.
         */
        get: operations["streaming_ndjson_v1_server_sent_events_streaming__topic__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/server_sent_events/test_trigger/{topic}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Trigger
         * @description Example endpoint to publish a few test messages to the specified topic.
         *     Any connected SSE clients (to /stream/<topic>) will receive these messages in real-time.
         */
        post: operations["trigger_v1_server_sent_events_test_trigger__topic__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/share/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read */
        get: operations["read_v1_share__get"];
        put?: never;
        /** Create */
        post: operations["create_v1_share__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/share/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get */
        get: operations["get_v1_share__id__get"];
        /** Update */
        put: operations["update_v1_share__id__put"];
        post?: never;
        /** Delete */
        delete: operations["delete_v1_share__id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/share/{id}/clone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Clone */
        post: operations["clone_v1_share__id__clone_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dashboard/cost-config/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get All Cost Configs
         * @description Get all cost configurations.
         *
         *     Only admin users can view cost configurations.
         */
        get: operations["get_all_cost_configs_v1_dashboard_cost_config__get"];
        put?: never;
        /**
         * Create Cost Config
         * @description Create a new cost configuration.
         *
         *     Only admin users can create cost configurations.
         */
        post: operations["create_cost_config_v1_dashboard_cost_config__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dashboard/cost-config/{config_type}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Cost Config
         * @description Get a specific cost configuration by type.
         *
         *     Only admin users can view cost configurations.
         */
        get: operations["get_cost_config_v1_dashboard_cost_config__config_type__get"];
        /**
         * Update Cost Config
         * @description Update an existing cost configuration.
         *
         *     Only admin users can update cost configurations.
         */
        put: operations["update_cost_config_v1_dashboard_cost_config__config_type__put"];
        post?: never;
        /**
         * Delete Cost Config
         * @description Delete a cost configuration.
         *
         *     Only admin users can delete cost configurations.
         */
        delete: operations["delete_cost_config_v1_dashboard_cost_config__config_type__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dashboard/cost-config/upsert": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upsert Cost Config
         * @description Create or update a cost configuration.
         *
         *     If the configuration exists, it will be updated. If not, it will be created.
         *     Only admin users can upsert cost configurations.
         */
        post: operations["upsert_cost_config_v1_dashboard_cost_config_upsert_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dashboard/cost-config/initialize": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Initialize Default Configs
         * @description Initialize default cost configurations.
         *
         *     This will create default configurations for any missing types.
         *     Only admin users can initialize configurations.
         */
        post: operations["initialize_default_configs_v1_dashboard_cost_config_initialize_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dashboard/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Dashboard
         * @description Get complete dashboard data including summary metrics, charts, and performance data.
         *
         *     This endpoint provides all the data needed for the Cost Benefit Analysis dashboard:
         *     - Summary metrics (agents, workflows, jobs, runs, time saved, dollars saved, ROI, revenue)
         *     - Time series charts for key metrics
         *     - Top performing agents and workflows
         *     - Department-wise metrics
         *
         *     Data is served from MongoDB cache for faster response times.
         */
        get: operations["get_dashboard_v1_dashboard__get"];
        put?: never;
        /**
         * Get Dashboard With Custom Filters
         * @description Get dashboard data with custom filters and date ranges.
         *
         *     Allows for more complex filtering including custom date ranges.
         *     Data is served from MongoDB cache for faster response times.
         */
        post: operations["get_dashboard_with_custom_filters_v1_dashboard__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dashboard/metrics/{metric_type}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Metric History
         * @description Get historical data for a specific metric.
         *
         *     Useful for detailed analysis of individual metrics over time.
         *     Data is served from MongoDB cache for faster response times.
         */
        get: operations["get_metric_history_v1_dashboard_metrics__metric_type__history_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dashboard/agents/performance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Agent Performance
         * @description Get top performing agents based on ROI and efficiency metrics.
         */
        get: operations["get_agent_performance_v1_dashboard_agents_performance_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dashboard/workflows/performance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Workflow Performance
         * @description Get top performing workflows based on ROI and efficiency metrics.
         */
        get: operations["get_workflow_performance_v1_dashboard_workflows_performance_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dashboard/departments/metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Department Metrics
         * @description Get department-wise metrics including agents, workflows, time saved, and ROI.
         */
        get: operations["get_department_metrics_v1_dashboard_departments_metrics_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dashboard/summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Dashboard Summary
         * @description Get just the summary metrics without charts and detailed data.
         *
         *     Useful for quick overview widgets or mobile views.
         *     Data is served from MongoDB cache for faster response times.
         */
        get: operations["get_dashboard_summary_v1_dashboard_summary_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dashboard/cache/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Refresh Dashboard Cache
         * @description Refresh dashboard cache for the current user.
         *
         *     This will pre-generate and cache dashboard data for common time ranges.
         */
        post: operations["refresh_dashboard_cache_v1_dashboard_cache_refresh_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dashboard/cache": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Clear Dashboard Cache
         * @description Clear dashboard cache for the current user.
         */
        delete: operations["clear_dashboard_cache_v1_dashboard_cache_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dashboard/cache/cleanup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cleanup Expired Cache
         * @description Clean up expired cache entries (admin operation).
         */
        post: operations["cleanup_expired_cache_v1_dashboard_cache_cleanup_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/dashboard/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Dashboard Health Check
         * @description Health check endpoint for the dashboard API.
         */
        get: operations["dashboard_health_check_v1_dashboard_health_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/google-ads/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Google Ads Oauth Url */
        get: operations["google_ads_oauth_url_v1_auth_google_ads_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/google-ads/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Google Ads Callback
         * @description Google Ads OAuth callback endpoint.
         *     Google redirects the browser here with ?code=...
         *     User authentication is required for this endpoint.
         */
        get: operations["google_ads_callback_v1_auth_google_ads_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/meta/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Meta Oauth Url */
        get: operations["meta_oauth_url_v1_auth_meta_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/meta/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Meta Callback */
        get: operations["meta_callback_v1_auth_meta_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/hubspot/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Hubspot Oauth Url */
        get: operations["hubspot_oauth_url_v1_auth_hubspot_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/hubspot/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Hubspot Callback */
        get: operations["hubspot_callback_v1_auth_hubspot_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/github/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Github Oauth Url */
        get: operations["github_oauth_url_v1_auth_github_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/github/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Github Callback */
        get: operations["github_callback_v1_auth_github_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/db-auth/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Db Auths
         * @description List all database connection auths for the current user.
         */
        get: operations["list_db_auths_v1_db_auth__get"];
        put?: never;
        /**
         * Create Db Auth
         * @description Create a new database connection auth.
         *     Allows multiple database connections per user.
         */
        post: operations["create_db_auth_v1_db_auth__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/db-auth/connections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Db Connections
         * @description List all database connections with details (without password).
         *     Useful for displaying connection info in UI.
         */
        get: operations["list_db_connections_v1_db_auth_connections_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/db-auth/{db_auth_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Db Auth
         * @description Get a specific database auth by ID.
         */
        get: operations["get_db_auth_v1_db_auth__db_auth_id__get"];
        /**
         * Update Db Auth
         * @description Update an existing database auth.
         */
        put: operations["update_db_auth_v1_db_auth__db_auth_id__put"];
        post?: never;
        /**
         * Delete Db Auth
         * @description Delete a database auth by ID.
         */
        delete: operations["delete_db_auth_v1_db_auth__db_auth_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/db-auth/by-name/{connection_name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Db Auth By Name
         * @description Get a database auth by its memorable name.
         */
        get: operations["get_db_auth_by_name_v1_db_auth_by_name__connection_name__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/db-auth/test-connection/{db_auth_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Test Db Connection
         * @description Test a database connection.
         */
        post: operations["test_db_connection_v1_db_auth_test_connection__db_auth_id__post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/adp/client-credentials": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Adp Client Credentials
         * @description Authenticate using ADP client credentials flow with Mutual SSL.
         *
         *     ADP mandates mTLS where both client and server verify each other's
         *     identity through SSL certificates.
         *
         *     Certificate paths can be:
         *     - Local file paths: /path/to/cert.pem
         *     - S3 URLs: s3://bucket/path/cert.pem or https://bucket.s3.region.amazonaws.com/path/cert.pem
         *
         *     S3 certificates will be automatically downloaded to temporary files,
         *     used for authentication, then securely deleted.
         */
        post: operations["adp_client_credentials_v1_auth_adp_client_credentials_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/asana/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Asana Oauth Url
         * @description Build the Asana authorization URL and return it to the frontend.
         */
        get: operations["asana_oauth_url_v1_auth_asana_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/asana/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Asana Callback
         * @description Handle the redirect from Asana, exchange the code for tokens,
         *     and persist them in the user's AppAuth collection.
         */
        get: operations["asana_callback_v1_auth_asana_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/spotify/client-credentials": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Spotify Client Credentials
         * @description Authenticate using Spotify client credentials flow.
         *     This is for server-to-server authentication using the Client Credentials Flow.
         */
        post: operations["spotify_client_credentials_v1_auth_spotify_client_credentials_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/netsuite/tba": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Netsuite Tba Auth
         * @description Unlike OAuth2, NetSuite TBA doesn't exchange credentials for an access token.
         *       - consumer key/secret (integration)
         *       - token id/secret (TBA token)
         *     Auth token will be long lived so it will persists.
         */
        post: operations["netsuite_tba_auth_v1_auth_netsuite_tba_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/ukg/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ukg Oauth Url
         * @description Generate UKG OAuth authorization URL.
         */
        get: operations["ukg_oauth_url_v1_auth_ukg_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/ukg/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ukg Oauth Callback
         * @description Handle UKG OAuth callback after user authorization.
         *
         *     This endpoint receives the authorization code from UKG and exchanges it
         *     for an access token, then stores it in the user's app_auth.
         */
        get: operations["ukg_oauth_callback_v1_auth_ukg_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/icims/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Icims Oauth Url
         * @description Generate iCIMS OAuth authorization URL.
         */
        get: operations["icims_oauth_url_v1_auth_icims_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/icims/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Icims Oauth Callback
         * @description Handle iCIMS OAuth callback after user authorization.
         */
        get: operations["icims_oauth_callback_v1_auth_icims_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/workday/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Workday Oauth Url
         * @description Generate Workday OAuth authorization URL.
         */
        get: operations["workday_oauth_url_v1_auth_workday_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/workday/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Workday Oauth Callback
         * @description Handle Workday OAuth callback after user authorization.
         *
         *     This endpoint receives the authorization code from Workday and exchanges it
         *     for an access token and refresh token (ideally non-expiring), then stores them.
         */
        get: operations["workday_oauth_callback_v1_auth_workday_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/datev/oauth-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Datev Oauth Url
         * @description Generate DATEV OAuth authorization URL.
         */
        get: operations["datev_oauth_url_v1_auth_datev_oauth_url_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/auth/datev/oauth-callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Datev Oauth Callback
         * @description Handle DATEV OAuth callback after user authorization.
         */
        get: operations["datev_oauth_callback_v1_auth_datev_oauth_callback_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/terminal/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Terminal Status
         * @description Debug endpoint: returns list of connected terminal CLI agent user IDs.
         */
        get: operations["terminal_status_v1_terminal_status_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/openapi.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Open Api Json */
        get: operations["open_api_json_v1_openapi_json_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/docs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Api Docs */
        get: operations["api_docs_v1_docs_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/redoc": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Api Redoc */
        get: operations["api_redoc_v1_redoc_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
};
export type webhooks = Record<string, never>;
export type components = {
    schemas: {
        /**
         * ADPClientCredentialsRequest
         * @description Request model for ADP client credentials authentication.
         *
         *     ADP requires Mutual SSL (mTLS) Authentication:
         *     - client_id: Your ADP client ID from ADP Developer Portal
         *     - client_secret: Your ADP client secret
         *     - ssl_cert_path: Path to SSL certificate file (PEM or PFX format)
         *     - ssl_key_path: Path to private key file (optional if embedded in cert)
         *
         *     Supported path formats for certificates:
         *     - Local file path: /path/to/cert.pem
         *     - S3 URI: s3://bucket-name/path/to/cert.pem
         *     - S3 HTTPS URL: https://bucket-name.s3.region.amazonaws.com/path/to/cert.pem
         *
         *     Certificate Setup:
         *     1. Obtain SSL certificate and private key from:
         *        - ADP Partners: Developer Self-Service Portal (automated)
         *        - ADP Clients: ADP Certificate Signing Tool (manual CSR)
         *        - API Central Users: API Central (automated)
         *
         *     2. Upload certificates to S3 (recommended) or provide local paths:
         *        s3://your-bucket/adp/cert.pem
         *        s3://your-bucket/adp/key.key
         *
         *     3. Optionally combine into single PFX file:
         *        openssl pkcs12 -export -out adp.pfx -name "OrgName Mutual SSL" \
         *            -inkey private-key.key -in public-certificate.pem
         *
         *     Note: Certificates are valid for 2 years. ADP sends renewal notices
         *     60 days before expiration.
         */
        ADPClientCredentialsRequest: {
            /** Client Id */
            client_id: string;
            /** Client Secret */
            client_secret: string;
            /** Ssl Cert Path */
            ssl_cert_path: string;
            /** Ssl Key Path */
            ssl_key_path?: string | null;
        };
        /**
         * ActionCreate
         * @description base class to be utilized by concrete action types to create action
         */
        ActionCreate: {
            /** Name */
            name: string;
            /**
             * Version
             * @default 0
             */
            version: number;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * User Manual
             * @default
             */
            user_manual: string;
            type: components["schemas"]["ActionType"];
            /**
             * Config
             * @default {}
             */
            config: {
                [key: string]: unknown;
            };
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Results
             * @default []
             */
            results: components["schemas"]["ActionResult"][] | null;
            /** Input */
            input?: {
                [key: string]: unknown;
            } | null;
            /** Output */
            output?: {
                [key: string]: unknown;
            } | null;
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /**
             * Shared With
             * @default []
             */
            shared_with: string[];
            /**
             * Time Saved Per Run
             * @description Time saved per run in hours for dashboard agent calculations
             * @default 0.5
             */
            time_saved_per_run: number | null;
            /**
             * Dollar Cost Per Hour
             * @description Dollar cost per hour for dashboard agent calculations
             * @default 50
             */
            dollar_cost_per_hour: number | null;
        };
        /** ActionCreateAudio2TextTranscriptionOpenai */
        ActionCreateAudio2TextTranscriptionOpenai: {
            /** Name */
            name: string;
            /**
             * Version
             * @default 0
             */
            version: number;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * User Manual
             * @default
             */
            user_manual: string;
            /** @default audio2text_transcription_openai */
            type: components["schemas"]["ActionType"];
            config: components["schemas"]["TranscriptionReq"];
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Results
             * @default []
             */
            results: components["schemas"]["ActionResult"][] | null;
            input?: components["schemas"]["DataBlock-Input"] | null;
            output?: components["schemas"]["DataBlocks-Input"] | null;
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /**
             * Shared With
             * @default []
             */
            shared_with: string[];
            /**
             * Time Saved Per Run
             * @description Time saved per run in hours for dashboard agent calculations
             * @default 0.5
             */
            time_saved_per_run: number | null;
            /**
             * Dollar Cost Per Hour
             * @description Dollar cost per hour for dashboard agent calculations
             * @default 50
             */
            dollar_cost_per_hour: number | null;
        };
        /** ActionCreateAudio2TextTranslationOpenai */
        ActionCreateAudio2TextTranslationOpenai: {
            /** Name */
            name: string;
            /**
             * Version
             * @default 0
             */
            version: number;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * User Manual
             * @default
             */
            user_manual: string;
            /** @default audio2text_translation_openai */
            type: components["schemas"]["ActionType"];
            config: components["schemas"]["TranslationReq"];
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Results
             * @default []
             */
            results: components["schemas"]["ActionResult"][] | null;
            input?: components["schemas"]["DataBlock-Input"] | null;
            output?: components["schemas"]["DataBlocks-Input"] | null;
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /**
             * Shared With
             * @default []
             */
            shared_with: string[];
            /**
             * Time Saved Per Run
             * @description Time saved per run in hours for dashboard agent calculations
             * @default 0.5
             */
            time_saved_per_run: number | null;
            /**
             * Dollar Cost Per Hour
             * @description Dollar cost per hour for dashboard agent calculations
             * @default 50
             */
            dollar_cost_per_hour: number | null;
        };
        /** ActionCreateImg2ImgEditOpenai */
        ActionCreateImg2ImgEditOpenai: {
            /** Name */
            name: string;
            /**
             * Version
             * @default 0
             */
            version: number;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * User Manual
             * @default
             */
            user_manual: string;
            /** @default text2text_search_web */
            type: components["schemas"]["ActionType"];
            config: components["schemas"]["ImageEdit"];
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Results
             * @default []
             */
            results: components["schemas"]["ActionResult"][] | null;
            input?: components["schemas"]["ImageEditInput"] | null;
            output?: components["schemas"]["ImagesResponse"] | null;
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /**
             * Shared With
             * @default []
             */
            shared_with: string[];
            /**
             * Time Saved Per Run
             * @description Time saved per run in hours for dashboard agent calculations
             * @default 0.5
             */
            time_saved_per_run: number | null;
            /**
             * Dollar Cost Per Hour
             * @description Dollar cost per hour for dashboard agent calculations
             * @default 50
             */
            dollar_cost_per_hour: number | null;
        };
        /** ActionCreateImg2ImgVariationOpenai */
        ActionCreateImg2ImgVariationOpenai: {
            /** Name */
            name: string;
            /**
             * Version
             * @default 0
             */
            version: number;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * User Manual
             * @default
             */
            user_manual: string;
            /** @default text2text_search_web */
            type: components["schemas"]["ActionType"];
            config: components["schemas"]["ImageCreateVariation"];
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Results
             * @default []
             */
            results: components["schemas"]["ActionResult"][] | null;
            input?: components["schemas"]["ImageVariationInput"] | null;
            output?: components["schemas"]["ImagesResponse"] | null;
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /**
             * Shared With
             * @default []
             */
            shared_with: string[];
            /**
             * Time Saved Per Run
             * @description Time saved per run in hours for dashboard agent calculations
             * @default 0.5
             */
            time_saved_per_run: number | null;
            /**
             * Dollar Cost Per Hour
             * @description Dollar cost per hour for dashboard agent calculations
             * @default 50
             */
            dollar_cost_per_hour: number | null;
        };
        /** ActionCreateMultimodalAssistantOpenai */
        ActionCreateMultimodalAssistantOpenai: {
            /** Name */
            name: string;
            /**
             * Version
             * @default 0
             */
            version: number;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * User Manual
             * @default
             */
            user_manual: string;
            /** @default multimodal_assistant_openai */
            type: components["schemas"]["ActionType"];
            config: components["schemas"]["AssistantOpenaiConfigCreate"];
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Results
             * @default []
             */
            results: components["schemas"]["ActionResult"][] | null;
            input?: components["schemas"]["TextObj"] | null;
            output?: components["schemas"]["TextObjs"] | null;
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /**
             * Shared With
             * @default []
             */
            shared_with: string[];
            /**
             * Time Saved Per Run
             * @description Time saved per run in hours for dashboard agent calculations
             * @default 0.5
             */
            time_saved_per_run: number | null;
            /**
             * Dollar Cost Per Hour
             * @description Dollar cost per hour for dashboard agent calculations
             * @default 50
             */
            dollar_cost_per_hour: number | null;
        };
        /** ActionCreateText2AudioSpeechOpenai */
        ActionCreateText2AudioSpeechOpenai: {
            /** Name */
            name: string;
            /**
             * Version
             * @default 0
             */
            version: number;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * User Manual
             * @default
             */
            user_manual: string;
            /** @default text2audio_openai */
            type: components["schemas"]["ActionType"];
            config: components["schemas"]["SpeechReq"];
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Results
             * @default []
             */
            results: components["schemas"]["ActionResult"][] | null;
            input?: components["schemas"]["TextObj"] | null;
            output?: components["schemas"]["AudioRes"] | null;
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /**
             * Shared With
             * @default []
             */
            shared_with: string[];
            /**
             * Time Saved Per Run
             * @description Time saved per run in hours for dashboard agent calculations
             * @default 0.5
             */
            time_saved_per_run: number | null;
            /**
             * Dollar Cost Per Hour
             * @description Dollar cost per hour for dashboard agent calculations
             * @default 50
             */
            dollar_cost_per_hour: number | null;
        };
        /** ActionCreateText2TextLlmChatOpenai */
        ActionCreateText2TextLlmChatOpenai: {
            /** Name */
            name: string;
            /**
             * Version
             * @default 0
             */
            version: number;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * User Manual
             * @default
             */
            user_manual: string;
            /** @default text2text_llm_chat_openai */
            type: components["schemas"]["ActionType"];
            config: components["schemas"]["LlmChatOpenaiConfig"];
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Results
             * @default []
             */
            results: components["schemas"]["ActionResult"][] | null;
            input?: components["schemas"]["TextObj"] | null;
            output?: components["schemas"]["TextObjs"] | null;
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /**
             * Shared With
             * @default []
             */
            shared_with: string[];
            /**
             * Time Saved Per Run
             * @description Time saved per run in hours for dashboard agent calculations
             * @default 0.5
             */
            time_saved_per_run: number | null;
            /**
             * Dollar Cost Per Hour
             * @description Dollar cost per hour for dashboard agent calculations
             * @default 50
             */
            dollar_cost_per_hour: number | null;
        };
        /** ActionCreateText2TextReadUrl */
        ActionCreateText2TextReadUrl: {
            /** Name */
            name: string;
            /**
             * Version
             * @default 0
             */
            version: number;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * User Manual
             * @default
             */
            user_manual: string;
            /** @default text2text_read_url */
            type: components["schemas"]["ActionType"];
            config: components["schemas"]["ReadUrlConfig"];
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Results
             * @default []
             */
            results: components["schemas"]["ActionResult"][] | null;
            /** Input */
            input?: {
                [key: string]: unknown;
            } | null;
            /** Output */
            output?: {
                [key: string]: unknown;
            } | null;
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /**
             * Shared With
             * @default []
             */
            shared_with: string[];
            /**
             * Time Saved Per Run
             * @description Time saved per run in hours for dashboard agent calculations
             * @default 0.5
             */
            time_saved_per_run: number | null;
            /**
             * Dollar Cost Per Hour
             * @description Dollar cost per hour for dashboard agent calculations
             * @default 50
             */
            dollar_cost_per_hour: number | null;
        };
        /** ActionCreateText2TextSearchWeb */
        ActionCreateText2TextSearchWeb: {
            /** Name */
            name: string;
            /**
             * Version
             * @default 0
             */
            version: number;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * User Manual
             * @default
             */
            user_manual: string;
            /** @default text2text_search_web */
            type: components["schemas"]["ActionType"];
            config: components["schemas"]["SearchWebConfig"];
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Results
             * @default []
             */
            results: components["schemas"]["ActionResult"][] | null;
            /** Input */
            input?: {
                [key: string]: unknown;
            } | null;
            /** Output */
            output?: {
                [key: string]: unknown;
            } | null;
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /**
             * Shared With
             * @default []
             */
            shared_with: string[];
            /**
             * Time Saved Per Run
             * @description Time saved per run in hours for dashboard agent calculations
             * @default 0.5
             */
            time_saved_per_run: number | null;
            /**
             * Dollar Cost Per Hour
             * @description Dollar cost per hour for dashboard agent calculations
             * @default 50
             */
            dollar_cost_per_hour: number | null;
        };
        /** ActionCreateText2TextUserInput */
        ActionCreateText2TextUserInput: {
            /** Name */
            name: string;
            /**
             * Version
             * @default 0
             */
            version: number;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * User Manual
             * @default
             */
            user_manual: string;
            /** @default text2text_user_input */
            type: components["schemas"]["ActionType"];
            config: components["schemas"]["DataBlock-Input"];
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Results
             * @default []
             */
            results: components["schemas"]["ActionResult"][] | null;
            /** Input */
            input?: {
                [key: string]: unknown;
            } | null;
            /** Output */
            output?: {
                [key: string]: unknown;
            } | null;
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /**
             * Shared With
             * @default []
             */
            shared_with: string[];
            /**
             * Time Saved Per Run
             * @description Time saved per run in hours for dashboard agent calculations
             * @default 0.5
             */
            time_saved_per_run: number | null;
            /**
             * Dollar Cost Per Hour
             * @description Dollar cost per hour for dashboard agent calculations
             * @default 50
             */
            dollar_cost_per_hour: number | null;
        };
        /** ActionDoc */
        ActionDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at?: string;
            /** Name */
            name: string;
            /**
             * Version
             * @default 0
             */
            version: number;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * User Manual
             * @default
             */
            user_manual: string;
            type: components["schemas"]["ActionType"];
            /**
             * Config
             * @default {}
             */
            config: {
                [key: string]: unknown;
            };
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Results
             * @default []
             */
            results: components["schemas"]["ActionResult"][] | null;
            /** Input */
            input?: {
                [key: string]: unknown;
            } | null;
            /** Output */
            output?: {
                [key: string]: unknown;
            } | null;
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /**
             * Shared With
             * @default []
             */
            shared_with: string[];
            /**
             * Time Saved Per Run
             * @description Time saved per run in hours for dashboard agent calculations
             * @default 0.5
             */
            time_saved_per_run: number | null;
            /**
             * Dollar Cost Per Hour
             * @description Dollar cost per hour for dashboard agent calculations
             * @default 50
             */
            dollar_cost_per_hour: number | null;
            /** User Id */
            user_id: string;
            /** Id */
            _id: string;
        };
        /** ActionDocsFound */
        ActionDocsFound: {
            /** Docs */
            docs: components["schemas"]["ActionLiteDoc"][];
            /** Total Count */
            total_count: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /**
         * ActionGraphCreate
         * @description Input from User to create action_graph
         */
        ActionGraphCreate: {
            /** Name */
            name: string;
            /**
             * Version
             * @default 0
             */
            version: number;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * User Manual
             * @default
             */
            user_manual: string;
            /**
             * Nodes
             * @description map of node_id to action_id
             * @example {
             *       "node1": "action1",
             *       "node2": "action2",
             *       "node3": "action3"
             *     }
             */
            nodes?: {
                [key: string]: string;
            } | null;
            /**
             * Node Details
             * @description map of node_id to Node
             * @default {}
             * @example {
             *       "node1": {
             *         "data": {
             *           "actionId": "action1",
             *           "label": "action1_name_version"
             *         },
             *         "id": "node1",
             *         "position": {
             *           "x": 288,
             *           "y": 203
             *         },
             *         "type": "default"
             *       }
             *     }
             */
            node_details: {
                [key: string]: components["schemas"]["Node-Input"];
            };
            /**
             * Graph
             * @description map of node_id to list of node_ids
             * @example {
             *       "node1": [
             *         "node2",
             *         "node3"
             *       ],
             *       "node2": [
             *         "node3"
             *       ]
             *     }
             */
            graph?: {
                [key: string]: string[];
            } | null;
            /** Start Node Id */
            start_node_id?: string | null;
            /** Input */
            input?: {
                [key: string]: unknown;
            } | null;
            /** Output */
            output?: {
                [key: string]: components["schemas"]["ActionDoc"];
            } | null;
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /**
             * Shared With
             * @default []
             */
            shared_with: string[];
            /**
             * Time Saved Per File
             * @description Time saved per file in hours for dashboard workflow calculations
             * @default 0.1
             */
            time_saved_per_file: number | null;
            /**
             * Dollar Cost Per Hour
             * @description Dollar cost per hour for dashboard workflow calculations
             * @default 50
             */
            dollar_cost_per_hour: number | null;
        };
        /** ActionGraphDoc */
        "ActionGraphDoc-Input": {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /** Name */
            name: string;
            /**
             * Version
             * @default 0
             */
            version: number;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * User Manual
             * @default
             */
            user_manual: string;
            /**
             * Nodes
             * @description map of node_id to action_id
             * @example {
             *       "node1": "action1",
             *       "node2": "action2",
             *       "node3": "action3"
             *     }
             */
            nodes?: {
                [key: string]: string;
            } | null;
            /**
             * Node Details
             * @description map of node_id to Node
             * @default {}
             * @example {
             *       "node1": {
             *         "data": {
             *           "actionId": "action1",
             *           "label": "action1_name_version"
             *         },
             *         "id": "node1",
             *         "position": {
             *           "x": 288,
             *           "y": 203
             *         },
             *         "type": "default"
             *       }
             *     }
             */
            node_details: {
                [key: string]: components["schemas"]["Node-Input"];
            };
            /**
             * Graph
             * @description map of node_id to list of node_ids
             * @example {
             *       "node1": [
             *         "node2",
             *         "node3"
             *       ],
             *       "node2": [
             *         "node3"
             *       ]
             *     }
             */
            graph?: {
                [key: string]: string[];
            } | null;
            /** Start Node Id */
            start_node_id?: string | null;
            /** Input */
            input?: {
                [key: string]: unknown;
            } | null;
            /** Output */
            output?: {
                [key: string]: components["schemas"]["ActionDoc"];
            } | null;
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /**
             * Shared With
             * @default []
             */
            shared_with: string[];
            /**
             * Time Saved Per File
             * @description Time saved per file in hours for dashboard workflow calculations
             * @default 0.1
             */
            time_saved_per_file: number | null;
            /**
             * Dollar Cost Per Hour
             * @description Dollar cost per hour for dashboard workflow calculations
             * @default 50
             */
            dollar_cost_per_hour: number | null;
            /** User Id */
            user_id: string;
            /**
             * Created At
             * Format: date-time
             * @default 2026-04-02T05:43:34.240088
             */
            created_at: string;
            /** Id */
            _id: string;
        };
        /** ActionGraphDoc */
        "ActionGraphDoc-Output": {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /** Name */
            name: string;
            /**
             * Version
             * @default 0
             */
            version: number;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * User Manual
             * @default
             */
            user_manual: string;
            /**
             * Nodes
             * @description map of node_id to action_id
             * @example {
             *       "node1": "action1",
             *       "node2": "action2",
             *       "node3": "action3"
             *     }
             */
            nodes?: {
                [key: string]: string;
            } | null;
            /**
             * Node Details
             * @description map of node_id to Node
             * @default {}
             * @example {
             *       "node1": {
             *         "data": {
             *           "actionId": "action1",
             *           "label": "action1_name_version"
             *         },
             *         "id": "node1",
             *         "position": {
             *           "x": 288,
             *           "y": 203
             *         },
             *         "type": "default"
             *       }
             *     }
             */
            node_details: {
                [key: string]: components["schemas"]["Node-Output"];
            };
            /**
             * Graph
             * @description map of node_id to list of node_ids
             * @example {
             *       "node1": [
             *         "node2",
             *         "node3"
             *       ],
             *       "node2": [
             *         "node3"
             *       ]
             *     }
             */
            graph?: {
                [key: string]: string[];
            } | null;
            /** Start Node Id */
            start_node_id?: string | null;
            /** Input */
            input?: {
                [key: string]: unknown;
            } | null;
            /** Output */
            output?: {
                [key: string]: components["schemas"]["ActionDoc"];
            } | null;
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /**
             * Shared With
             * @default []
             */
            shared_with: string[];
            /**
             * Time Saved Per File
             * @description Time saved per file in hours for dashboard workflow calculations
             * @default 0.1
             */
            time_saved_per_file: number | null;
            /**
             * Dollar Cost Per Hour
             * @description Dollar cost per hour for dashboard workflow calculations
             * @default 50
             */
            dollar_cost_per_hour: number | null;
            /** User Id */
            user_id: string;
            /**
             * Created At
             * Format: date-time
             * @default 2026-04-02T05:43:34.240088
             */
            created_at: string;
            /** Id */
            _id: string;
        };
        /** ActionGraphDocsFound */
        ActionGraphDocsFound: {
            /** Docs */
            docs: components["schemas"]["ActionGraphLiteDoc"][];
            /** Total Count */
            total_count: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** ActionGraphLiteDoc */
        ActionGraphLiteDoc: {
            /** Id */
            _id: string;
            /** Name */
            name: string;
            /**
             * Version
             * @default 0
             */
            version: number;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * User Manual
             * @default
             */
            user_manual: string;
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /**
             * Shared With
             * @default []
             */
            shared_with: string[];
            /** User Id */
            user_id: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
            /**
             * Time Saved Per File
             * @default 0.1
             */
            time_saved_per_file: number | null;
            /**
             * Dollar Cost Per Hour
             * @default 50
             */
            dollar_cost_per_hour: number | null;
        };
        /** ActionGraphResultDoc */
        ActionGraphResultDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * Name
             * @default
             */
            name: string;
            type: components["schemas"]["EventType"];
            status: components["schemas"]["EventResultStatus"];
            error_message?: components["schemas"]["TextObj"] | null;
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /** Result */
            result: components["schemas"]["ActionGraphDoc-Output"] | components["schemas"]["ActionGraphLiteDoc"];
            /** User Id */
            user_id: string;
            /**
             * Created At
             * Format: date-time
             * @default 2026-04-02T05:43:16.798266
             */
            created_at: string;
            /** Id */
            _id: string;
            /** File Url */
            file_url?: string | null;
        };
        /** ActionGraphResultDocsFound */
        ActionGraphResultDocsFound: {
            /** Docs */
            docs: components["schemas"]["ActionGraphResultLiteDoc"][];
            /** Total Count */
            total_count: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** ActionGraphResultLiteDoc */
        ActionGraphResultLiteDoc: {
            /** Id */
            _id: string;
            /**
             * Name
             * @default
             */
            name: string;
            /** User Id */
            user_id: string;
            type: components["schemas"]["EventType"];
            status: components["schemas"]["EventResultStatus"];
            error_message?: components["schemas"]["TextObj"] | null;
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
            result?: components["schemas"]["ActionGraphLiteDoc"] | null;
            /** File Url */
            file_url?: string | null;
        };
        /**
         * ActionGraphResultUpdate
         * @description Input from User to update Action Result
         */
        ActionGraphResultUpdate: {
            /** Name */
            name?: string | null;
            type?: components["schemas"]["EventType"] | null;
            status?: components["schemas"]["EventResultStatus"] | null;
            error_message?: components["schemas"]["TextObj"] | null;
            /** Is Saved */
            is_saved?: boolean | null;
            /** Result */
            result?: components["schemas"]["ActionGraphDoc-Input"] | components["schemas"]["ActionGraphLiteDoc"] | null;
            /** File Url */
            file_url?: string | null;
        };
        /** ActionGraphUpdate */
        ActionGraphUpdate: {
            /** Name */
            name?: string | null;
            /** Version */
            version?: number | null;
            /** Description */
            description?: string | null;
            /** User Manual */
            user_manual?: string | null;
            /**
             * Nodes
             * @description map of node to action
             * @example {
             *       "node1": "action1",
             *       "node2": "action2",
             *       "node3": "action3"
             *     }
             */
            nodes?: {
                [key: string]: string;
            } | null;
            /**
             * Node Details
             * @description map of nodeId to Node
             * @example {
             *       "node1": {
             *         "data": {
             *           "actionId": "action1",
             *           "label": "action1_name_version"
             *         },
             *         "id": "node1",
             *         "position": {
             *           "x": 288,
             *           "y": 203
             *         },
             *         "type": "default"
             *       }
             *     }
             */
            node_details?: {
                [key: string]: components["schemas"]["Node-Input"];
            } | null;
            /**
             * Graph
             * @description map of node to nodes
             * @example {
             *       "node1": [
             *         "node2",
             *         "node3"
             *       ],
             *       "node2": [
             *         "node3"
             *       ]
             *     }
             */
            graph?: {
                [key: string]: string[];
            } | null;
            /** Start Node Id */
            start_node_id?: string | null;
            input?: components["schemas"]["TextObj"] | null;
            /** Output */
            output?: {
                [key: string]: components["schemas"]["ActionDoc"];
            } | null;
            /** Is Saved */
            is_saved?: boolean | null;
            /** Is Published */
            is_published?: boolean | null;
            /** Shared With */
            shared_with?: string[] | null;
            /**
             * Time Saved Per File
             * @description Time saved per file in hours for dashboard workflow calculations
             * @default 0.1
             */
            time_saved_per_file: number | null;
            /**
             * Dollar Cost Per Hour
             * @description Dollar cost per hour for dashboard workflow calculations
             * @default 50
             */
            dollar_cost_per_hour: number | null;
        };
        /** ActionLiteDoc */
        ActionLiteDoc: {
            /** Id */
            _id: string;
            type: components["schemas"]["ActionType"];
            /** Name */
            name: string;
            /**
             * Version
             * @default 0
             */
            version: number;
            /**
             * User Manual
             * @default
             */
            user_manual: string;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /** Shared With */
            shared_with?: string[] | null;
            /** User Id */
            user_id: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /** Updated At */
            updated_at?: string | null;
            /**
             * Time Saved Per Run
             * @default 0.5
             */
            time_saved_per_run: number | null;
            /**
             * Dollar Cost Per Hour
             * @default 50
             */
            dollar_cost_per_hour: number | null;
        };
        /** ActionResult */
        ActionResult: {
            /** Input */
            input?: {
                [key: string]: unknown;
            } | null;
            /** Output */
            output?: {
                [key: string]: unknown;
            } | null;
        };
        /** ActionResultDoc */
        ActionResultDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * Name
             * @default
             */
            name: string;
            type: components["schemas"]["EventType"];
            status: components["schemas"]["EventResultStatus"];
            error_message?: components["schemas"]["TextObj"] | null;
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            result: components["schemas"]["ActionDoc"];
            /** User Id */
            user_id: string;
            /**
             * Created At
             * Format: date-time
             * @default 2026-04-02T05:43:16.798266
             */
            created_at: string;
            /** Id */
            _id: string;
            /** File Url */
            file_url?: string | null;
        };
        /** ActionResultDocsFound */
        ActionResultDocsFound: {
            /** Docs */
            docs: components["schemas"]["ActionResultLiteDoc"][];
            /** Total Count */
            total_count: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** ActionResultLiteDoc */
        ActionResultLiteDoc: {
            /** Id */
            _id: string;
            /**
             * Name
             * @default
             */
            name: string;
            /** User Id */
            user_id: string;
            type: components["schemas"]["EventType"];
            status: components["schemas"]["EventResultStatus"];
            error_message?: components["schemas"]["TextObj"] | null;
            /**
             * Is Saved
             * @default false
             */
            is_saved: boolean;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
            result?: components["schemas"]["ActionLiteDoc"] | null;
            /** File Url */
            file_url?: string | null;
        };
        /**
         * ActionResultUpdate
         * @description Input from User to update Action Result
         */
        ActionResultUpdate: {
            /** Name */
            name?: string | null;
            type?: components["schemas"]["EventType"] | null;
            status?: components["schemas"]["EventResultStatus"] | null;
            error_message?: components["schemas"]["TextObj"] | null;
            /** Is Saved */
            is_saved?: boolean | null;
            result?: components["schemas"]["ActionDoc"] | null;
            /** File Url */
            file_url?: string | null;
        };
        /**
         * ActionType
         * @enum {string}
         */
        ActionType: "openai" | "openai_chat" | "openai_assistant" | "gemini" | "claude" | "grok" | "deepseek" | "api" | "database" | "multicloud_router" | "multicloud_router_search" | "multimodal_assistant_openai" | "multimodal_sandbox_query" | "multimodal_graph_rag_query" | "multimodal_google_search" | "multimodal_serp_google_search" | "multimodal_exa_search" | "text2text_llm_chat_openai" | "text2text_llm_chat_claude" | "text2text_llm_chat_gemini" | "text2text_llm_responses_openai" | "text2text_llm_chat_grok" | "text2text_llm_chat_deepseek" | "action_llm" | "text2text_llm_chat_grok_collections" | "multimodal_llm_chat_with_vector_search_openai" | "llm_objectives_openai" | "text2text_read_url" | "text2text_search_web" | "text2text_io_mapper" | "text2text_user_input" | "text2text_api_call" | "text2text_read_api_file" | "text2text_sql_runner" | "action_text2text_pdf_parser" | "action_kiwi_scout" | "text2text_convert_file_to_pdf_or_txt" | "json_flatten" | "csv_merge" | "extract_urls" | "file_uploader_openai" | "file_uploader_gemini" | "file_uploader_claude" | "text2img_dalle_openai" | "text2img_search_image" | "text2img_imagine_midjourney_ai" | "text2img_button_midjourney_ai" | "text2img_flux" | "text2img_gemini" | "text2img_grok" | "img2img_edit_openai" | "img2img_variation_openai" | "img2img_bulk_edit_claid" | "img2img_photoshoot_claid" | "text2video_search_video" | "video2video_opus" | "text2video_grok" | "text2audio_openai" | "text2audio_speech_cartesia" | "text2audio_speech_deepgram" | "audio2text_transcription_openai" | "audio2text_translation_openai" | "audio2text_transcription_assemblyai" | "audio2text_transcription_deepgram" | "audio2text_transcription_cartesia" | "action_text2text_linkedin" | "mock_action" | "playwright_scrape" | "playwright_login" | "text2video_gemini_veo_video_generation" | "action_text2text_json_reader" | "action_text2text_csv_to_parquet" | "action_text2text_parquet_inspector";
        /** ActionUpdate */
        ActionUpdate: {
            /** Name */
            name?: string | null;
            /** Version */
            version?: number | null;
            /** Description */
            description?: string | null;
            /** User Manual */
            user_manual?: string | null;
            /** Config */
            config?: {
                [key: string]: unknown;
            } | null;
            /** Is Saved */
            is_saved?: boolean | null;
            /** Is Published */
            is_published?: boolean | null;
            /** Shared With */
            shared_with?: string[] | null;
            /**
             * Time Saved Per Run
             * @description Time saved per run in hours for dashboard agent calculations
             */
            time_saved_per_run?: number | null;
            /**
             * Dollar Cost Per Hour
             * @description Dollar cost per hour for dashboard agent calculations
             */
            dollar_cost_per_hour?: number | null;
        };
        /** AgentData */
        "AgentData-Input": {
            /**
             * Openai Provider
             * @enum {string}
             */
            openai_provider: "openai" | "azure";
            /** Goal */
            goal: string;
            /**
             * Context
             * @default []
             */
            context: (components["schemas"]["ChatCompletionDeveloperMessageParam"] | components["schemas"]["ChatCompletionSystemMessageParam"] | components["schemas"]["ChatCompletionUserMessageParam-Input"] | components["schemas"]["ChatCompletionAssistantMessageParam-Input"] | components["schemas"]["ChatCompletionToolMessageParam"] | components["schemas"]["ChatCompletionFunctionMessageParam"])[];
        };
        /** AgentData */
        "AgentData-Output": {
            /**
             * Openai Provider
             * @enum {string}
             */
            openai_provider: "openai" | "azure";
            /** Goal */
            goal: string;
            /**
             * Context
             * @default []
             */
            context: (components["schemas"]["ChatCompletionDeveloperMessageParam"] | components["schemas"]["ChatCompletionSystemMessageParam"] | components["schemas"]["ChatCompletionUserMessageParam-Output"] | components["schemas"]["ChatCompletionAssistantMessageParam-Output"] | components["schemas"]["ChatCompletionToolMessageParam"] | components["schemas"]["ChatCompletionFunctionMessageParam"])[];
        };
        /**
         * AgentPerformance
         * @description Agent performance metrics
         */
        AgentPerformance: {
            /** Agent Id */
            agent_id: string;
            /** Agent Name */
            agent_name: string;
            /** Percentage */
            percentage: number;
            /** Change */
            change: number;
            /** Rank */
            rank: number;
        };
        /** AppAuthLiteDoc */
        AppAuthLiteDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at?: string;
            /** User Id */
            user_id: string;
            /** Id */
            _id: string;
            app_name: components["schemas"]["AppTypes"];
        };
        /** AppAuthLiteDocPage */
        AppAuthLiteDocPage: {
            /** Docs */
            docs: components["schemas"]["AppAuthLiteDoc"][];
            /** Total Count */
            total_count: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** AppAuthRead */
        AppAuthRead: {
            /** Id */
            id?: string | null;
            app_name?: components["schemas"]["AppTypes"] | null;
        };
        /** AppCredsCreate */
        AppCredsCreate: {
            /** App Name */
            app_name: string | components["schemas"]["AppTypes"];
            /** Creds */
            creds: {
                [key: string]: unknown;
            };
        };
        /** AppCredsDoc */
        AppCredsDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at?: string;
            /** App Name */
            app_name: string | components["schemas"]["AppTypes"];
            /** Creds */
            creds: {
                [key: string]: unknown;
            };
            /** User Id */
            user_id: string;
            /** Id */
            _id: string;
        };
        /** AppCredsLiteDoc */
        AppCredsLiteDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at?: string;
            /** User Id */
            user_id: string;
            /** Id */
            _id: string;
            app_name: components["schemas"]["AppTypes"];
        };
        /** AppCredsLiteDocPage */
        AppCredsLiteDocPage: {
            /** Docs */
            docs: components["schemas"]["AppCredsLiteDoc"][];
            /** Total Count */
            total_count: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** AppCredsRead */
        AppCredsRead: {
            /** Id */
            id?: string | null;
            app_name?: components["schemas"]["AppTypes"] | null;
        };
        /** AppCredsUpdate */
        AppCredsUpdate: {
            /** App Name */
            app_name: string | components["schemas"]["AppTypes"];
            /** Creds */
            creds: {
                [key: string]: unknown;
            };
        };
        /**
         * AppTypes
         * @enum {string}
         */
        AppTypes: "anon" | "slack" | "aws" | "google" | "google_ads" | "notion" | "jira" | "openai" | "gemini" | "claude" | "zoho" | "zendesk" | "intuit" | "databricks" | "snowflake" | "salesforce" | "airtable" | "box" | "firecrawl" | "outlook" | "dropbox" | "superset" | "meta" | "looker" | "grok" | "deepgram" | "cartesia" | "slack_user" | "sap" | "hubspot" | "stripe" | "github" | "netsuite" | "assemblyai" | "replicate_flux" | "exa" | "opus" | "google_serp" | "adp" | "asana" | "unstructuredio" | "whatsapp" | "zoom" | "plaid" | "spotify" | "ukg" | "icims" | "workday" | "deepseek" | "muso" | "vercel" | "datev" | "grafana" | "flyio" | "gamma_ai" | "thesys" | "remotion" | "tipalti" | "northflank" | "chargebee" | "datadog" | "ordway" | "sigma_computing" | "extend_ai" | "reducto";
        /** AssistantOpenaiConfigCreate */
        AssistantOpenaiConfigCreate: {
            /** Extra Headers */
            extra_headers?: {
                [key: string]: string;
            } | null;
            /** Extra Query */
            extra_query?: {
                [key: string]: unknown;
            } | null;
            /** Extra Body */
            extra_body?: unknown | null;
            /** Timeout */
            timeout?: number | null;
            /**
             * Model
             * @default gpt-4o
             * @enum {string}
             */
            model: "gpt-5.4" | "gpt-5.4-mini" | "gpt-5.4-nano" | "gpt-5.4-mini-2026-03-17" | "gpt-5.4-nano-2026-03-17" | "gpt-5.3-chat-latest" | "gpt-5.2" | "gpt-5.2-2025-12-11" | "gpt-5.2-chat-latest" | "gpt-5.2-pro" | "gpt-5.2-pro-2025-12-11" | "gpt-5.1" | "gpt-5.1-2025-11-13" | "gpt-5.1-codex" | "gpt-5.1-mini" | "gpt-5.1-chat-latest" | "gpt-5" | "gpt-5-mini" | "gpt-5-nano" | "gpt-5-2025-08-07" | "gpt-5-mini-2025-08-07" | "gpt-5-nano-2025-08-07" | "gpt-5-chat-latest" | "gpt-4.1" | "gpt-4.1-mini" | "gpt-4.1-nano" | "gpt-4.1-2025-04-14" | "gpt-4.1-mini-2025-04-14" | "gpt-4.1-nano-2025-04-14" | "o4-mini" | "o4-mini-2025-04-16" | "o3" | "o3-2025-04-16" | "o3-mini" | "o3-mini-2025-01-31" | "o1" | "o1-2024-12-17" | "o1-preview" | "o1-preview-2024-09-12" | "o1-mini" | "o1-mini-2024-09-12" | "gpt-4o" | "gpt-4o-2024-11-20" | "gpt-4o-2024-08-06" | "gpt-4o-2024-05-13" | "gpt-4o-audio-preview" | "gpt-4o-audio-preview-2024-10-01" | "gpt-4o-audio-preview-2024-12-17" | "gpt-4o-audio-preview-2025-06-03" | "gpt-4o-mini-audio-preview" | "gpt-4o-mini-audio-preview-2024-12-17" | "gpt-4o-search-preview" | "gpt-4o-mini-search-preview" | "gpt-4o-search-preview-2025-03-11" | "gpt-4o-mini-search-preview-2025-03-11" | "chatgpt-4o-latest" | "codex-mini-latest" | "gpt-4o-mini" | "gpt-4o-mini-2024-07-18" | "gpt-4-turbo" | "gpt-4-turbo-2024-04-09" | "gpt-4-0125-preview" | "gpt-4-turbo-preview" | "gpt-4-1106-preview" | "gpt-4-vision-preview" | "gpt-4" | "gpt-4-0314" | "gpt-4-0613" | "gpt-4-32k" | "gpt-4-32k-0314" | "gpt-4-32k-0613" | "gpt-3.5-turbo" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo-0301" | "gpt-3.5-turbo-0613" | "gpt-3.5-turbo-1106" | "gpt-3.5-turbo-0125" | "gpt-3.5-turbo-16k-0613";
            /** Description */
            description?: string | null;
            /** Instructions */
            instructions?: string | null;
            /** Metadata */
            metadata?: {
                [key: string]: string;
            } | null;
            /** Tools */
            tools?: (components["schemas"]["CodeInterpreterToolParam"] | components["schemas"]["FileSearchToolParam"] | components["schemas"]["FunctionToolParam"] | string)[] | null;
            /** Tool Resources */
            tool_resources?: components["schemas"]["openai__types__beta__assistant_create_params__ToolResources"] | {
                [key: string]: unknown;
            } | null;
            /** Temperature */
            temperature?: number | null;
            /** Top P */
            top_p?: number | null;
            /** Response Format */
            response_format?: "auto" | components["schemas"]["ResponseFormatText"] | components["schemas"]["ResponseFormatJSONObject"] | components["schemas"]["ResponseFormatJSONSchema"] | null;
            /** Name */
            name?: string | null;
            /**
             * Provider
             * @enum {string}
             */
            provider: "azure" | "openai";
            /**
             * Output Text To File Char Limit
             * @default 75000
             */
            output_text_to_file_char_limit: number | null;
        };
        /**
         * Audio
         * @description Data about a previous audio response from the model.
         *     [Learn more](https://platform.openai.com/docs/guides/audio).
         */
        Audio: {
            /** Id */
            id: string;
        };
        /** AudioRes */
        AudioRes: {
            /** Url */
            url: string;
        };
        /** AuthResponse */
        AuthResponse: {
            user?: components["schemas"]["User"] | null;
            session?: components["schemas"]["Session"] | null;
        };
        /**
         * AutoFileChunkingStrategyParam
         * @description The default strategy.
         *
         *     This strategy currently uses a `max_chunk_size_tokens` of `800` and `chunk_overlap_tokens` of `400`.
         */
        AutoFileChunkingStrategyParam: {
            /**
             * Type
             * @constant
             */
            type: "auto";
        };
        /** BaseModel */
        BaseModel: Record<string, never>;
        /** BearerAccessToken */
        BearerAccessToken: {
            /** Access Token */
            access_token: string;
            /** Token Type */
            token_type: string;
        };
        /** Body_async_run_action_doc_v1_actions_async_run_post */
        Body_async_run_action_doc_v1_actions_async_run_post: {
            action: components["schemas"]["ActionCreate"];
            input: components["schemas"]["DataBlock-Input"];
            webhook?: components["schemas"]["Webhook"] | null;
        };
        /** Body_async_run_action_graph_v1_action_graphs__id__async_run_post */
        Body_async_run_action_graph_v1_action_graphs__id__async_run_post: {
            input: components["schemas"]["DataBlock-Input"];
            webhook?: components["schemas"]["Webhook"] | null;
        };
        /** Body_async_run_action_loop_v1_actions__id__async_run_loop_post */
        Body_async_run_action_loop_v1_actions__id__async_run_loop_post: {
            /** Input */
            input: {
                [key: string]: unknown;
            }[];
            webhook?: components["schemas"]["Webhook"] | null;
        };
        /** Body_async_run_action_v1_actions__id__async_run_post */
        Body_async_run_action_v1_actions__id__async_run_post: {
            /** Input */
            input: {
                [key: string]: unknown;
            };
            webhook?: components["schemas"]["Webhook"] | null;
        };
        /** Body_batch_run_action_graph_v1_action_graphs__id__batch_run_post */
        Body_batch_run_action_graph_v1_action_graphs__id__batch_run_post: {
            input: components["schemas"]["DataBlock-Input"];
            webhook?: components["schemas"]["Webhook"] | null;
        };
        /** Body_batch_run_action_v1_actions__id__batch_run_post */
        Body_batch_run_action_v1_actions__id__batch_run_post: {
            input: components["schemas"]["DataBlock-Input"];
            webhook?: components["schemas"]["Webhook"] | null;
        };
        /** Body_ingest_file_async_v1_ingestion_file_async_post */
        Body_ingest_file_async_v1_ingestion_file_async_post: {
            /** File */
            file: string;
        };
        /** Body_return_token_v1_auth_token_post */
        Body_return_token_v1_auth_token_post: {
            /** Grant Type */
            grant_type?: string | null;
            /** Username */
            username: string;
            /**
             * Password
             * Format: password
             */
            password: string;
            /**
             * Scope
             * @default
             */
            scope: string;
            /** Client Id */
            client_id?: string | null;
            /**
             * Client Secret
             * Format: password
             */
            client_secret?: string | null;
        };
        /** Body_return_user_and_session_v1_auth__post */
        Body_return_user_and_session_v1_auth__post: {
            /** Grant Type */
            grant_type?: string | null;
            /** Username */
            username: string;
            /**
             * Password
             * Format: password
             */
            password: string;
            /**
             * Scope
             * @default
             */
            scope: string;
            /** Client Id */
            client_id?: string | null;
            /**
             * Client Secret
             * Format: password
             */
            client_secret?: string | null;
        };
        /** Body_run_slack_cmd_v1_webhooks_slack_command_post */
        Body_run_slack_cmd_v1_webhooks_slack_command_post: {
            /** Token */
            token: string;
            /** Command */
            command: string;
            /** Text */
            text: string;
            /** Response Url */
            response_url: string;
            /** Trigger Id */
            trigger_id: string;
            /** User Id */
            user_id: string;
            /** Team Id */
            team_id: string;
            /** Team Domain */
            team_domain: string;
            /** Channel Id */
            channel_id: string;
            /** Channel Name */
            channel_name: string;
            /** Api App Id */
            api_app_id: string;
        };
        /** Body_upload_file_on_azure_v1_openai_storage_files_azure_post */
        Body_upload_file_on_azure_v1_openai_storage_files_azure_post: {
            /**
             * File
             * @description File as UploadFile
             */
            file: string;
        };
        /** Body_upload_file_on_openai_v1_openai_storage_files_openai_post */
        Body_upload_file_on_openai_v1_openai_storage_files_openai_post: {
            /**
             * File
             * @description File as UploadFile
             */
            file: string;
        };
        /** Body_upload_file_v1_openai_storage_files__post */
        Body_upload_file_v1_openai_storage_files__post: {
            /**
             * File
             * @description File as UploadFile
             */
            file: string;
        };
        /** Body_upload_files_v1_files__post */
        Body_upload_files_v1_files__post: {
            /**
             * Files
             * @description Multiple files as UploadFile
             */
            files: string[];
        };
        /** Body_upload_public_files_v1_files_public__post */
        Body_upload_public_files_v1_files_public__post: {
            /**
             * Files
             * @description Multiple files as UploadFile
             */
            files: string[];
        };
        /** Body_v2_ingest_file_into_collection_v1_vectorstore_v2_collections__collection_name__files_async_post */
        Body_v2_ingest_file_into_collection_v1_vectorstore_v2_collections__collection_name__files_async_post: {
            /** File */
            file: string;
        };
        /** BulkMemberResponse */
        BulkMemberResponse: {
            /** Total Requested */
            total_requested: number;
            /** Inserted Count */
            inserted_count: number;
            /** Updated Count */
            updated_count: number;
            /** Matched Count */
            matched_count: number;
            /** Invalid Emails */
            invalid_emails?: string[];
            /** Not Found Emails */
            not_found_emails?: string[];
            /** Skipped Owner Emails */
            skipped_owner_emails?: string[];
            /** Skipped Legacy Users */
            skipped_legacy_users?: string[];
        };
        /** CharacterCreate */
        CharacterCreate: {
            /** Name */
            name: string;
            /**
             * Tags
             * @default []
             */
            tags: string[];
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
        };
        /** CharacterDoc */
        CharacterDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at?: string;
            /** Name */
            name: string;
            /**
             * Tags
             * @default []
             */
            tags: string[];
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /** User Id */
            user_id: string;
            /** Id */
            _id: string;
        };
        /** CharacterLiteDoc */
        CharacterLiteDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at?: string;
            /** Name */
            name: string;
            /**
             * Tags
             * @default []
             */
            tags: string[];
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            /** User Id */
            user_id: string;
            /** Id */
            _id: string;
        };
        /** CharacterLiteDocPage */
        CharacterLiteDocPage: {
            /** Docs */
            docs: components["schemas"]["CharacterLiteDoc"][];
            /** Total Count */
            total_count: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** CharacterUpdate */
        CharacterUpdate: {
            /** Name */
            name?: string | null;
            /** Tags */
            tags?: string[] | null;
            /** Is Published */
            is_published?: boolean | null;
        };
        /**
         * ChartData
         * @description Chart data structure
         */
        ChartData: {
            /** Title */
            title: string;
            /** Data Points */
            data_points: components["schemas"]["TimeSeriesDataPoint"][];
            metric_type: components["schemas"]["MetricType"];
            /**
             * Unit
             * @default
             */
            unit: string;
        };
        /**
         * ChatCompletionAllowedToolChoiceParam
         * @description Constrains the tools available to the model to a pre-defined set.
         */
        ChatCompletionAllowedToolChoiceParam: {
            allowed_tools: components["schemas"]["ChatCompletionAllowedToolsParam"];
            /**
             * Type
             * @constant
             */
            type: "allowed_tools";
        };
        /**
         * ChatCompletionAllowedToolsParam
         * @description Constrains the tools available to the model to a pre-defined set.
         */
        ChatCompletionAllowedToolsParam: {
            /**
             * Mode
             * @enum {string}
             */
            mode: "auto" | "required";
            /** Tools */
            tools: {
                [key: string]: unknown;
            }[];
        };
        /**
         * ChatCompletionAssistantMessageParam
         * @description Messages sent by the model in response to user messages.
         */
        "ChatCompletionAssistantMessageParam-Input": {
            /**
             * Role
             * @constant
             */
            role: "assistant";
            audio?: components["schemas"]["Audio"] | null;
            /** Content */
            content?: string | (components["schemas"]["ChatCompletionContentPartTextParam"] | components["schemas"]["ChatCompletionContentPartRefusalParam"])[] | null;
            function_call?: components["schemas"]["FunctionCall"] | null;
            /** Name */
            name?: string;
            /** Refusal */
            refusal?: string | null;
            /** Tool Calls */
            tool_calls?: (components["schemas"]["ChatCompletionMessageFunctionToolCallParam-Input"] | components["schemas"]["ChatCompletionMessageCustomToolCallParam-Input"])[];
        };
        /**
         * ChatCompletionAssistantMessageParam
         * @description Messages sent by the model in response to user messages.
         */
        "ChatCompletionAssistantMessageParam-Output": {
            /**
             * Role
             * @constant
             */
            role: "assistant";
            audio?: components["schemas"]["Audio"] | null;
            /** Content */
            content?: string | (components["schemas"]["ChatCompletionContentPartTextParam"] | components["schemas"]["ChatCompletionContentPartRefusalParam"])[] | null;
            function_call?: components["schemas"]["FunctionCall"] | null;
            /** Name */
            name?: string;
            /** Refusal */
            refusal?: string | null;
            /** Tool Calls */
            tool_calls?: (components["schemas"]["ChatCompletionMessageFunctionToolCallParam-Output"] | components["schemas"]["ChatCompletionMessageCustomToolCallParam-Output"])[];
        };
        /**
         * ChatCompletionAudioParam
         * @description Parameters for audio output.
         *
         *     Required when audio output is requested with
         *     `modalities: ["audio"]`. [Learn more](https://platform.openai.com/docs/guides/audio).
         */
        ChatCompletionAudioParam: {
            /**
             * Format
             * @enum {string}
             */
            format: "wav" | "aac" | "mp3" | "flac" | "opus" | "pcm16";
            /** Voice */
            voice: string | ("alloy" | "ash" | "ballad" | "coral" | "echo" | "sage" | "shimmer" | "verse" | "marin" | "cedar") | components["schemas"]["VoiceID"];
        };
        /**
         * ChatCompletionContentPartImageParam
         * @description Learn about [image inputs](https://platform.openai.com/docs/guides/vision).
         */
        ChatCompletionContentPartImageParam: {
            image_url: components["schemas"]["ImageURL"];
            /**
             * Type
             * @constant
             */
            type: "image_url";
        };
        /**
         * ChatCompletionContentPartInputAudioParam
         * @description Learn about [audio inputs](https://platform.openai.com/docs/guides/audio).
         */
        ChatCompletionContentPartInputAudioParam: {
            input_audio: components["schemas"]["InputAudio"];
            /**
             * Type
             * @constant
             */
            type: "input_audio";
        };
        /** ChatCompletionContentPartRefusalParam */
        ChatCompletionContentPartRefusalParam: {
            /** Refusal */
            refusal: string;
            /**
             * Type
             * @constant
             */
            type: "refusal";
        };
        /**
         * ChatCompletionContentPartTextParam
         * @description Learn about [text inputs](https://platform.openai.com/docs/guides/text-generation).
         */
        ChatCompletionContentPartTextParam: {
            /** Text */
            text: string;
            /**
             * Type
             * @constant
             */
            type: "text";
        };
        /**
         * ChatCompletionDeveloperMessageParam
         * @description Developer-provided instructions that the model should follow, regardless of
         *     messages sent by the user. With o1 models and newer, `developer` messages
         *     replace the previous `system` messages.
         */
        ChatCompletionDeveloperMessageParam: {
            /** Content */
            content: string | components["schemas"]["ChatCompletionContentPartTextParam"][];
            /**
             * Role
             * @constant
             */
            role: "developer";
            /** Name */
            name?: string;
        };
        /** ChatCompletionFunctionMessageParam */
        ChatCompletionFunctionMessageParam: {
            /** Content */
            content: string | null;
            /** Name */
            name: string;
            /**
             * Role
             * @constant
             */
            role: "function";
        };
        /**
         * ChatCompletionFunctionToolParam
         * @description A function tool that can be used to generate a response.
         */
        ChatCompletionFunctionToolParam: {
            function: components["schemas"]["openai__types__shared_params__function_definition__FunctionDefinition"];
            /**
             * Type
             * @constant
             */
            type: "function";
        };
        /**
         * ChatCompletionMessageCustomToolCallParam
         * @description A call to a custom tool created by the model.
         */
        "ChatCompletionMessageCustomToolCallParam-Input": {
            /** Id */
            id: string;
            custom: components["schemas"]["openai__types__chat__chat_completion_message_custom_tool_call_param__Custom"];
            /**
             * Type
             * @constant
             */
            type: "custom";
        };
        /**
         * ChatCompletionMessageCustomToolCallParam
         * @description A call to a custom tool created by the model.
         */
        "ChatCompletionMessageCustomToolCallParam-Output": {
            /** Id */
            id: string;
            custom: components["schemas"]["Custom-Output"];
            /**
             * Type
             * @constant
             */
            type: "custom";
        };
        /**
         * ChatCompletionMessageFunctionToolCallParam
         * @description A call to a function tool created by the model.
         */
        "ChatCompletionMessageFunctionToolCallParam-Input": {
            /** Id */
            id: string;
            function: components["schemas"]["openai__types__chat__chat_completion_message_function_tool_call_param__Function"];
            /**
             * Type
             * @constant
             */
            type: "function";
        };
        /**
         * ChatCompletionMessageFunctionToolCallParam
         * @description A call to a function tool created by the model.
         */
        "ChatCompletionMessageFunctionToolCallParam-Output": {
            /** Id */
            id: string;
            function: components["schemas"]["Function-Output"];
            /**
             * Type
             * @constant
             */
            type: "function";
        };
        /**
         * ChatCompletionNamedToolChoiceCustomParam
         * @description Specifies a tool the model should use.
         *
         *     Use to force the model to call a specific custom tool.
         */
        ChatCompletionNamedToolChoiceCustomParam: {
            custom: components["schemas"]["openai__types__chat__chat_completion_named_tool_choice_custom_param__Custom"];
            /**
             * Type
             * @constant
             */
            type: "custom";
        };
        /**
         * ChatCompletionNamedToolChoiceParam
         * @description Specifies a tool the model should use.
         *
         *     Use to force the model to call a specific function.
         */
        ChatCompletionNamedToolChoiceParam: {
            function: components["schemas"]["openai__types__chat__chat_completion_named_tool_choice_param__Function"];
            /**
             * Type
             * @constant
             */
            type: "function";
        };
        /**
         * ChatCompletionPredictionContentParam
         * @description Static predicted output content, such as the content of a text file that is
         *     being regenerated.
         */
        ChatCompletionPredictionContentParam: {
            /** Content */
            content: string | components["schemas"]["ChatCompletionContentPartTextParam"][];
            /**
             * Type
             * @constant
             */
            type: "content";
        };
        /**
         * ChatCompletionStreamOptionsParam
         * @description Options for streaming response. Only set this when you set `stream: true`.
         */
        ChatCompletionStreamOptionsParam: {
            /** Include Obfuscation */
            include_obfuscation?: boolean;
            /** Include Usage */
            include_usage?: boolean;
        };
        /**
         * ChatCompletionSystemMessageParam
         * @description Developer-provided instructions that the model should follow, regardless of
         *     messages sent by the user. With o1 models and newer, use `developer` messages
         *     for this purpose instead.
         */
        ChatCompletionSystemMessageParam: {
            /** Content */
            content: string | components["schemas"]["ChatCompletionContentPartTextParam"][];
            /**
             * Role
             * @constant
             */
            role: "system";
            /** Name */
            name?: string;
        };
        /** ChatCompletionToolMessageParam */
        ChatCompletionToolMessageParam: {
            /** Content */
            content: string | components["schemas"]["ChatCompletionContentPartTextParam"][];
            /**
             * Role
             * @constant
             */
            role: "tool";
            /** Tool Call Id */
            tool_call_id: string;
        };
        /**
         * ChatCompletionUserMessageParam
         * @description Messages sent by an end user, containing prompts or additional context
         *     information.
         */
        "ChatCompletionUserMessageParam-Input": {
            /** Content */
            content: string | (components["schemas"]["ChatCompletionContentPartTextParam"] | components["schemas"]["ChatCompletionContentPartImageParam"] | components["schemas"]["ChatCompletionContentPartInputAudioParam"] | components["schemas"]["File"])[];
            /**
             * Role
             * @constant
             */
            role: "user";
            /** Name */
            name?: string;
        };
        /**
         * ChatCompletionUserMessageParam
         * @description Messages sent by an end user, containing prompts or additional context
         *     information.
         */
        "ChatCompletionUserMessageParam-Output": {
            /** Content */
            content: string | (components["schemas"]["ChatCompletionContentPartTextParam"] | components["schemas"]["ChatCompletionContentPartImageParam"] | components["schemas"]["ChatCompletionContentPartInputAudioParam"] | components["schemas"]["File"])[];
            /**
             * Role
             * @constant
             */
            role: "user";
            /** Name */
            name?: string;
        };
        /** ChatDoc */
        ChatDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            action: components["schemas"]["ActionDoc"];
            /** Messages */
            messages: components["schemas"]["Message"][];
            /**
             * Openai Provider
             * @enum {string}
             */
            openai_provider: "azure" | "openai";
            /** Title */
            title: string | null;
            /** User Id */
            user_id: string;
            /**
             * Created At
             * Format: date-time
             * @default 2026-04-02T05:43:34.442450
             */
            created_at: string;
            /** Id */
            _id: string;
        };
        /** ChatUpdate */
        ChatUpdate: {
            /** Title */
            title?: string | null;
            /** Messages */
            messages: components["schemas"]["Message"][] | null;
        };
        /** CloneActionRequest */
        CloneActionRequest: {
            /** Action Ids */
            action_ids: string[];
            /** User Ids */
            user_ids: string[];
        };
        /** CloneActionResult */
        CloneActionResult: {
            /** Action Id */
            action_id: string;
            /** User Id */
            user_id: string;
        };
        /** CodeInterpreterTool */
        CodeInterpreterTool: {
            /**
             * Type
             * @constant
             */
            type: "code_interpreter";
        } & {
            [key: string]: unknown;
        };
        /** CodeInterpreterToolParam */
        CodeInterpreterToolParam: {
            /**
             * Type
             * @constant
             */
            type: "code_interpreter";
        };
        /**
         * CostConfigCreate
         * @description Model for creating cost configuration
         */
        CostConfigCreate: {
            config_type: components["schemas"]["CostConfigType"];
            /**
             * Value
             * @description The configuration value
             */
            value: number;
            /**
             * Description
             * @description Description of this configuration
             */
            description?: string | null;
            /** @description Time range configuration for time saved calculations */
            time_ranges?: components["schemas"]["TimeRangeConfig"] | null;
        };
        /**
         * CostConfigListResponse
         * @description Response model for listing cost configurations
         */
        CostConfigListResponse: {
            /** Configs */
            configs: components["schemas"]["CostConfigResponse"][];
            /** Total */
            total: number;
        };
        /**
         * CostConfigResponse
         * @description Response model for cost configuration
         */
        CostConfigResponse: {
            /** Id */
            id: string;
            config_type: components["schemas"]["CostConfigType"];
            /** Value */
            value: number;
            /** Description */
            description?: string | null;
            time_ranges?: components["schemas"]["TimeRangeConfig"] | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
            /** Created By */
            created_by: string;
            /** Updated By */
            updated_by: string;
        };
        /**
         * CostConfigType
         * @description Types of cost configurations
         * @enum {string}
         */
        CostConfigType: "hourly_rate" | "initial_investment" | "revenue_conversion_rate" | "time_saved_ranges";
        /**
         * CostConfigUpdate
         * @description Model for updating cost configuration
         */
        CostConfigUpdate: {
            /**
             * Value
             * @description The configuration value
             */
            value?: number | null;
            /**
             * Description
             * @description Description of this configuration
             */
            description?: string | null;
            /** @description Time range configuration for time saved calculations */
            time_ranges?: components["schemas"]["TimeRangeConfig"] | null;
        };
        /** CreateVectorStore */
        CreateVectorStore: {
            /** Chunking Strategy */
            chunking_strategy?: components["schemas"]["AutoFileChunkingStrategyParam"] | components["schemas"]["StaticFileChunkingStrategyObjectParam"] | null;
            expires_after?: components["schemas"]["ExpiresAfter-Input"] | null;
            /** File Ids */
            file_ids?: string[] | null;
            /** Metadata */
            metadata?: {
                [key: string]: string;
            } | null;
            /** Name */
            name?: string | null;
        };
        /** CreateVectorStoreFile */
        CreateVectorStoreFile: {
            /** Vector Store Id */
            vector_store_id: string;
            /** File Id */
            file_id: string;
        };
        /** CreateVectorStoreFileBatch */
        CreateVectorStoreFileBatch: {
            /** Vector Store Id */
            vector_store_id: string;
            /** File Ids */
            file_ids: string[];
        };
        /** CronSchedule */
        "CronSchedule-Input": {
            /**
             * Trigger
             * @default cron
             * @constant
             */
            trigger: "cron";
            /**
             * Minute
             * @description minute (0-59)
             */
            minute?: number | null;
            /**
             * Hour
             * @description hour (0-23)
             */
            hour?: number | null;
            /**
             * Day
             * @description day of month (1-31)
             */
            day?: number | null;
            /**
             * Day Of Week
             * @description number mapped name of weekday (0-6 or mon,tue,wed,thu,fri,sat,sun)
             */
            day_of_week?: ("mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun")[] | ("mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun") | null;
            /**
             * Week
             * @description ISO week (1-53)
             */
            week?: number | null;
            /**
             * Month
             * @description month (1-12)
             */
            month?: number | null;
            /**
             * Year
             * @description 4-digit year
             */
            year?: number | null;
            /**
             * Start Date
             * @description earliest possible date/time to trigger on (inclusive)
             */
            start_date?: string | null;
            /**
             * End Date
             * @description latest possible date/time to trigger on (inclusive)
             */
            end_date?: string | null;
            /** @description time zone to use for the date/time calculations (defaults to scheduler timezone) */
            timezone?: components["schemas"]["TimezoneEnum"] | null;
            /**
             * Jitter
             * @description delay the job execution by ``jitter`` seconds at most
             */
            jitter?: number | null;
            /**
             * Minute Mode
             * @default at
             * @enum {string}
             */
            minute_mode: "at" | "every";
            /**
             * Hour Mode
             * @default at
             * @enum {string}
             */
            hour_mode: "at" | "every";
            /**
             * Day Mode
             * @default at
             * @enum {string}
             */
            day_mode: "at" | "every";
            /**
             * Week Mode
             * @default at
             * @enum {string}
             */
            week_mode: "at" | "every";
            /**
             * Month Mode
             * @default at
             * @enum {string}
             */
            month_mode: "at" | "every";
        };
        /** CronSchedule */
        "CronSchedule-Output": {
            /**
             * Trigger
             * @default cron
             * @constant
             */
            trigger: "cron";
            /**
             * Minute
             * @description minute (0-59)
             */
            minute?: number | null;
            /**
             * Hour
             * @description hour (0-23)
             */
            hour?: number | null;
            /**
             * Day
             * @description day of month (1-31)
             */
            day?: number | null;
            /**
             * Day Of Week
             * @description number mapped name of weekday (0-6 or mon,tue,wed,thu,fri,sat,sun)
             */
            day_of_week?: ("mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun")[] | ("mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun") | null;
            /**
             * Week
             * @description ISO week (1-53)
             */
            week?: number | null;
            /**
             * Month
             * @description month (1-12)
             */
            month?: number | null;
            /**
             * Year
             * @description 4-digit year
             */
            year?: number | null;
            /**
             * Start Date
             * @description earliest possible date/time to trigger on (inclusive)
             */
            start_date?: string | null;
            /**
             * End Date
             * @description latest possible date/time to trigger on (inclusive)
             */
            end_date?: string | null;
            /** @description time zone to use for the date/time calculations (defaults to scheduler timezone) */
            timezone?: components["schemas"]["TimezoneEnum"] | null;
            /**
             * Jitter
             * @description delay the job execution by ``jitter`` seconds at most
             */
            jitter?: number | null;
            /**
             * Minute Mode
             * @default at
             * @enum {string}
             */
            minute_mode: "at" | "every";
            /**
             * Hour Mode
             * @default at
             * @enum {string}
             */
            hour_mode: "at" | "every";
            /**
             * Day Mode
             * @default at
             * @enum {string}
             */
            day_mode: "at" | "every";
            /**
             * Week Mode
             * @default at
             * @enum {string}
             */
            week_mode: "at" | "every";
            /**
             * Month Mode
             * @default at
             * @enum {string}
             */
            month_mode: "at" | "every";
        };
        /**
         * Custom
         * @description The custom tool that the model called.
         */
        "Custom-Output": {
            /** Input */
            input: string;
            /** Name */
            name: string;
        };
        /** DalleOpenaiConfig */
        DalleOpenaiConfig: {
            /** Prompt */
            prompt: string;
            /**
             * Model
             * @default dall-e-3
             * @constant
             */
            model: "dall-e-3";
            /**
             * N
             * @default 1
             */
            n: number | null;
            /**
             * Quality
             * @default standard
             * @enum {string}
             */
            quality: "standard" | "hd";
            /**
             * Response Format
             * @default url
             */
            response_format: ("url" | "b64_json") | null;
            /**
             * Size
             * @default 1024x1024
             */
            size: ("256x256" | "512x512" | "1024x1024" | "1792x1024" | "1024x1792") | null;
            /**
             * Style
             * @default natural
             */
            style: ("vivid" | "natural") | null;
            /**
             * User
             * @default
             */
            user: string;
            /**
             * Provider
             * @enum {string}
             */
            provider: "azure" | "openai";
        };
        /**
         * DashboardMetric
         * @description Individual metric data point
         */
        DashboardMetric: {
            metric_type: components["schemas"]["MetricType"];
            /** Value */
            value: number;
            /**
             * Unit
             * @default
             */
            unit: string;
            /** Percentage Change */
            percentage_change?: number | null;
            /** Trend */
            trend?: string | null;
        };
        /**
         * DashboardRequest
         * @description Request model for dashboard data
         */
        DashboardRequest: {
            /** @default last_7_days */
            time_range: components["schemas"]["TimeRange"];
            /** Start Date */
            start_date?: string | null;
            /** End Date */
            end_date?: string | null;
            filter_by?: components["schemas"]["FilterBy"] | null;
            /** Filter Value */
            filter_value?: string | null;
        };
        /**
         * DashboardResponse
         * @description Complete dashboard response
         */
        DashboardResponse: {
            summary: components["schemas"]["DashboardSummary"];
            time_saved_chart: components["schemas"]["ChartData"];
            dollars_saved_chart: components["schemas"]["ChartData"];
            roi_chart: components["schemas"]["ChartData"];
            revenue_chart: components["schemas"]["ChartData"];
            /** Top Agents */
            top_agents: components["schemas"]["AgentPerformance"][];
            /** Top Workflows */
            top_workflows: components["schemas"]["WorkflowPerformance"][];
            /** Department Metrics */
            department_metrics: components["schemas"]["DepartmentMetrics"][];
            /**
             * Generated At
             * Format: date-time
             */
            generated_at: string;
        };
        /**
         * DashboardSummary
         * @description Main dashboard summary
         */
        DashboardSummary: {
            total_agents: components["schemas"]["DashboardMetric"];
            active_workflows: components["schemas"]["DashboardMetric"];
            scheduled_jobs: components["schemas"]["DashboardMetric"];
            total_workflow_runs: components["schemas"]["DashboardMetric"];
            time_saved: components["schemas"]["DashboardMetric"];
            dollars_saved: components["schemas"]["DashboardMetric"];
            roi_percentage: components["schemas"]["DashboardMetric"];
            additional_revenue: components["schemas"]["DashboardMetric"];
            /**
             * Last Updated
             * Format: date-time
             */
            last_updated: string;
        };
        /** DataBlock */
        "DataBlock-Input": {
            /**
             * Text
             * @default
             */
            text: string;
            /**
             * Urls
             * @default []
             */
            urls: string[];
            /**
             * File Ids
             * @default []
             */
            file_ids: string[];
            /**
             * Files
             * @default []
             */
            files: components["schemas"]["FileParams"][];
            /**
             * Tools
             * @default []
             */
            tools: (components["schemas"]["CodeInterpreterTool"] | components["schemas"]["FileSearchTool-Input"] | components["schemas"]["FunctionTool-Input"])[];
            /** @default {} */
            tool_resources: components["schemas"]["openai__types__beta__assistant__ToolResources-Input"];
            /**
             * @default {
             *       "process_url_in_text": false,
             *       "process_attachment_url": true,
             *       "attachment_requested": 0
             *     }
             */
            metadata: components["schemas"]["Metadata"];
            search_data?: components["schemas"]["GraphRAGSearchData"] | null;
        };
        /** DataBlock */
        "DataBlock-Output": {
            /**
             * Text
             * @default
             */
            text: string;
            /**
             * Urls
             * @default []
             */
            urls: string[];
            /**
             * File Ids
             * @default []
             */
            file_ids: string[];
            /**
             * Files
             * @default []
             */
            files: components["schemas"]["FileParams"][];
            /**
             * Tools
             * @default []
             */
            tools: (components["schemas"]["CodeInterpreterTool"] | components["schemas"]["FileSearchTool-Output"] | components["schemas"]["FunctionTool-Output"])[];
            /** @default {} */
            tool_resources: components["schemas"]["ToolResources-Output"];
            /**
             * @default {
             *       "process_url_in_text": false,
             *       "process_attachment_url": true,
             *       "attachment_requested": 0
             *     }
             */
            metadata: components["schemas"]["Metadata"];
            search_data?: components["schemas"]["GraphRAGSearchData"] | null;
        };
        /** DataBlocks */
        "DataBlocks-Input": {
            /**
             * Blocks
             * @default []
             */
            blocks: components["schemas"]["DataBlock-Input"][];
        };
        /** DataBlocks */
        "DataBlocks-Output": {
            /**
             * Blocks
             * @default []
             */
            blocks: components["schemas"]["DataBlock-Output"][];
        };
        /**
         * DataFlowType
         * @enum {string}
         */
        DataFlowType: "only_output" | "both_input_output" | "as_is_last_output";
        /**
         * DatabaseConnection
         * @description Response model for database connection info (without sensitive data)
         */
        DatabaseConnection: {
            /** Id */
            id: string;
            /** Name */
            name: string | null;
            /** Database Type */
            database_type: string;
            /** Host */
            host?: string | null;
            /** Port */
            port?: number | null;
            /** Database */
            database?: string | null;
            /** Username */
            username?: string | null;
            /** Project Id */
            project_id?: string | null;
            /** Dataset */
            dataset?: string | null;
        };
        /**
         * DatabaseCredsModel
         * @description Credentials model for database connections
         */
        DatabaseCredsModel: {
            database_type: components["schemas"]["DatabaseEnum"];
            /** Host */
            host?: string | null;
            /** Port */
            port?: number | null;
            /** Database */
            database?: string | null;
            /** Username */
            username?: string | null;
            /** Password */
            password?: string | null;
            /** Name */
            name?: string | null;
            /** Project Id */
            project_id?: string | null;
            /** Dataset */
            dataset?: string | null;
            /** Credentials Info */
            credentials_info?: {
                [key: string]: unknown;
            } | null;
            /** Cloud Sql Instance Connection Name */
            cloud_sql_instance_connection_name?: string | null;
            /**
             * Cloud Sql Use Private Ip
             * @default false
             */
            cloud_sql_use_private_ip: boolean;
            /**
             * Cloud Sql Enable Iam Auth
             * @default false
             */
            cloud_sql_enable_iam_auth: boolean;
        };
        /**
         * DatabaseEnum
         * @enum {string}
         */
        DatabaseEnum: "sqlite" | "mysql" | "postgres" | "bigquery" | "oracle";
        /** DatastoreMetaDoc */
        DatastoreMetaDoc: {
            /** Name */
            name: string;
            /** Datastore Id */
            datastore_id: string;
            /** User Id */
            user_id: string;
            /**
             * Created At
             * Format: date-time
             * @default 2026-04-02T05:43:35.204154
             */
            created_at: string;
            /** Id */
            _id: string;
        };
        /** DbAuthDoc */
        DbAuthDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at?: string;
            /**
             * App Name
             * @default database
             * @constant
             */
            app_name: "database";
            /** Auth */
            auth: {
                [key: string]: unknown;
            };
            /** User Id */
            user_id: string;
            /** Id */
            _id: string;
        };
        /** DbAuthLiteDoc */
        DbAuthLiteDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at?: string;
            /** User Id */
            user_id: string;
            /** Id */
            _id: string;
            /**
             * App Name
             * @default database
             * @constant
             */
            app_name: "database";
        };
        /** DbAuthLiteDocPage */
        DbAuthLiteDocPage: {
            /** Docs */
            docs: components["schemas"]["DbAuthLiteDoc"][];
            /** Total Count */
            total_count: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** DeleteVectorStore */
        DeleteVectorStore: {
            /** Vector Store Id */
            vector_store_id: string;
        };
        /** DeleteVectorStoreFile */
        DeleteVectorStoreFile: {
            /** Vector Store Id */
            vector_store_id: string;
            /** File Id */
            file_id: string;
        };
        /** Deleted */
        Deleted: {
            /** Deleted Count */
            deleted_count: number;
        };
        /**
         * DepartmentMetrics
         * @description Department-wise metrics
         */
        DepartmentMetrics: {
            /** Department Name */
            department_name: string;
            /** Total Agents */
            total_agents: number;
            /** Active Workflows */
            active_workflows: number;
            /** Time Saved Hours */
            time_saved_hours: number;
            /** Dollars Saved */
            dollars_saved: number;
            /** Roi Percentage */
            roi_percentage: number;
        };
        /** DocFindPage */
        DocFindPage: {
            /** Docs */
            docs: components["schemas"]["BaseModel"][];
            /** Total Count */
            total_count: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /**
         * EventResultStatus
         * @enum {string}
         */
        EventResultStatus: "success" | "processing" | "error" | "waiting" | "stuck";
        /**
         * EventType
         * @enum {string}
         */
        EventType: "action_run" | "action_graph_run" | "datastore_put";
        /**
         * ExpiresAfter
         * @description The expiration policy for a vector store.
         */
        "ExpiresAfter-Input": {
            /**
             * Anchor
             * @constant
             */
            anchor: "last_active_at";
            /** Days */
            days: number;
        };
        /**
         * ExpiresAfter
         * @description The expiration policy for a vector store.
         */
        "ExpiresAfter-Output": {
            /**
             * Anchor
             * @constant
             */
            anchor: "last_active_at";
            /** Days */
            days: number;
        } & {
            [key: string]: unknown;
        };
        /**
         * Factor
         * @description A MFA factor.
         */
        Factor: {
            /** Id */
            id: string;
            /** Friendly Name */
            friendly_name?: string | null;
            /** Factor Type */
            factor_type: ("totp" | "phone") | string;
            /**
             * Status
             * @enum {string}
             */
            status: "verified" | "unverified";
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /**
         * File
         * @description Learn about [file inputs](https://platform.openai.com/docs/guides/text) for text generation.
         */
        File: {
            file: components["schemas"]["FileFile"];
            /**
             * Type
             * @constant
             */
            type: "file";
        };
        /** FileAndProcessingParams */
        FileAndProcessingParams: {
            /** Filename */
            filename: string;
            processing_params: components["schemas"]["PartitionParametersParams"];
        };
        /** FileCounts */
        FileCounts: {
            /** Cancelled */
            cancelled: number;
            /** Completed */
            completed: number;
            /** Failed */
            failed: number;
            /** In Progress */
            in_progress: number;
            /** Total */
            total: number;
        } & {
            [key: string]: unknown;
        };
        /** FileDeleted */
        FileDeleted: {
            /** Id */
            id: string;
            /** Deleted */
            deleted: boolean;
            /**
             * Object
             * @constant
             */
            object: "file";
        } & {
            [key: string]: unknown;
        };
        /** FileFile */
        FileFile: {
            /** File Data */
            file_data?: string;
            /** File Id */
            file_id?: string;
            /** Filename */
            filename?: string;
        };
        /** FileListResponseSchema */
        FileListResponseSchema: {
            /** Total */
            total: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
            /** Files */
            files: components["schemas"]["JobStatusSchema"][];
        };
        /** FileMeta */
        FileMeta: {
            /** Name */
            name: string;
            /**
             * Url
             * Format: uri
             */
            url: string;
        };
        /**
         * FileObject
         * @description The `File` object represents a document that has been uploaded to OpenAI.
         */
        FileObject: {
            /** Id */
            id: string;
            /** Bytes */
            bytes: number;
            /** Created At */
            created_at: number;
            /** Filename */
            filename: string;
            /**
             * Object
             * @constant
             */
            object: "file";
            /**
             * Purpose
             * @enum {string}
             */
            purpose: "assistants" | "assistants_output" | "batch" | "batch_output" | "fine-tune" | "fine-tune-results" | "vision" | "user_data";
            /**
             * Status
             * @enum {string}
             */
            status: "uploaded" | "processed" | "error";
            /** Expires At */
            expires_at?: number | null;
            /** Status Details */
            status_details?: string | null;
        } & {
            [key: string]: unknown;
        };
        /** FileParams */
        FileParams: {
            /** Filename */
            filename: string;
            /** Content */
            content: string;
        };
        /**
         * FileSearch
         * @description Overrides for the file search tool.
         */
        "FileSearch-Output": {
            /** Max Num Results */
            max_num_results?: number | null;
            ranking_options?: components["schemas"]["FileSearchRankingOptions-Output"] | null;
        } & {
            [key: string]: unknown;
        };
        /**
         * FileSearchRankingOptions
         * @description The ranking options for the file search.
         *
         *     If not specified, the file search tool will use the `auto` ranker and a score_threshold of 0.
         *
         *     See the [file search tool documentation](https://platform.openai.com/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.
         */
        "FileSearchRankingOptions-Output": {
            /** Score Threshold */
            score_threshold: number;
            /** Ranker */
            ranker?: ("auto" | "default_2024_08_21") | null;
        } & {
            [key: string]: unknown;
        };
        /** FileSearchTool */
        "FileSearchTool-Input": {
            /**
             * Type
             * @constant
             */
            type: "file_search";
            file_search?: components["schemas"]["openai__types__beta__file_search_tool__FileSearch-Input"] | null;
        } & {
            [key: string]: unknown;
        };
        /** FileSearchTool */
        "FileSearchTool-Output": {
            /**
             * Type
             * @constant
             */
            type: "file_search";
            file_search?: components["schemas"]["FileSearch-Output"] | null;
        } & {
            [key: string]: unknown;
        };
        /** FileSearchToolParam */
        FileSearchToolParam: {
            /**
             * Type
             * @constant
             */
            type: "file_search";
            file_search?: components["schemas"]["openai__types__beta__file_search_tool_param__FileSearch"];
        };
        /** FilesAndProcessingParams */
        FilesAndProcessingParams: {
            /** Files And Params */
            files_and_params: components["schemas"]["FileAndProcessingParams"][];
        };
        /**
         * FilterBy
         * @enum {string}
         */
        FilterBy: "agent" | "workflow" | "department";
        /**
         * Function
         * @description The function that the model called.
         */
        "Function-Output": {
            /** Arguments */
            arguments: string;
            /** Name */
            name: string;
        };
        /**
         * FunctionCall
         * @description Deprecated and replaced by `tool_calls`.
         *
         *     The name and arguments of a function that should be called, as generated by the model.
         */
        FunctionCall: {
            /** Arguments */
            arguments: string;
            /** Name */
            name: string;
        };
        /** FunctionDefinition */
        "FunctionDefinition-Output": {
            /** Name */
            name: string;
            /** Description */
            description?: string | null;
            /** Parameters */
            parameters?: {
                [key: string]: unknown;
            } | null;
            /** Strict */
            strict?: boolean | null;
        } & {
            [key: string]: unknown;
        };
        /** FunctionTool */
        "FunctionTool-Input": {
            function: components["schemas"]["openai__types__shared__function_definition__FunctionDefinition"];
            /**
             * Type
             * @constant
             */
            type: "function";
        } & {
            [key: string]: unknown;
        };
        /** FunctionTool */
        "FunctionTool-Output": {
            function: components["schemas"]["FunctionDefinition-Output"];
            /**
             * Type
             * @constant
             */
            type: "function";
        } & {
            [key: string]: unknown;
        };
        /** FunctionToolParam */
        FunctionToolParam: {
            function: components["schemas"]["openai__types__shared_params__function_definition__FunctionDefinition"];
            /**
             * Type
             * @constant
             */
            type: "function";
        };
        /** GraphRAGSearchData */
        GraphRAGSearchData: {
            /** Sources */
            sources: components["schemas"]["SourceChunk"][];
            /** Graph Visualization */
            graph_visualization?: {
                [key: string]: unknown;
            } | null;
        };
        /** HTTPValidationError */
        HTTPValidationError: {
            /** Detail */
            detail?: components["schemas"]["ValidationError"][];
        };
        /**
         * Image
         * @description Represents the content or the URL of an image generated by the OpenAI API.
         */
        Image: {
            /** B64 Json */
            b64_json?: string | null;
            /** Revised Prompt */
            revised_prompt?: string | null;
            /** Url */
            url?: string | null;
        } & {
            [key: string]: unknown;
        };
        /** ImageCreateVariation */
        ImageCreateVariation: {
            /** Extra Headers */
            extra_headers?: {
                [key: string]: string;
            } | null;
            /** Extra Query */
            extra_query?: {
                [key: string]: unknown;
            } | null;
            /** Extra Body */
            extra_body?: unknown | null;
            /** Timeout */
            timeout?: number | null;
            /** Image */
            image: string;
            /**
             * Model
             * @default dall-e-3
             */
            model: string | "dall-e-3" | null;
            /** N */
            n?: number | null;
            /** Response Format */
            response_format?: ("url" | "b64_json") | null;
            /** Size */
            size?: ("256x256" | "512x512" | "1024x1024") | null;
            /** User */
            user?: string | null;
        };
        /** ImageEdit */
        ImageEdit: {
            /** Extra Headers */
            extra_headers?: {
                [key: string]: string;
            } | null;
            /** Extra Query */
            extra_query?: {
                [key: string]: unknown;
            } | null;
            /** Extra Body */
            extra_body?: unknown | null;
            /** Timeout */
            timeout?: number | null;
            /** Image */
            image: string;
            /** Prompt */
            prompt: string;
            /** Mask */
            mask?: string | null;
            /**
             * Model
             * @default dall-e-3
             */
            model: string | "dall-e-3" | null;
            /**
             * N
             * @default 1
             */
            n: number | null;
            /** Response Format */
            response_format?: ("url" | "b64_json") | null;
            /** Size */
            size?: ("256x256" | "512x512" | "1024x1024") | null;
            /** User */
            user?: string | null;
        };
        /** ImageEditInput */
        ImageEditInput: {
            /** Image */
            image?: string | null;
            /** Prompt */
            prompt?: string | null;
            /** Mask */
            mask?: string | null;
            /** Size */
            size?: ("256x256" | "512x512" | "1024x1024") | null;
        };
        /** ImageURL */
        ImageURL: {
            /** Url */
            url: string;
            /**
             * Detail
             * @enum {string}
             */
            detail?: "auto" | "low" | "high";
        };
        /** ImageVariationInput */
        ImageVariationInput: {
            /** Image */
            image?: string | null;
            /** Size */
            size?: ("256x256" | "512x512" | "1024x1024") | null;
        };
        /**
         * ImagesResponse
         * @description The response from the image generation endpoint.
         */
        ImagesResponse: {
            /** Created */
            created: number;
            /** Background */
            background?: ("transparent" | "opaque") | null;
            /** Data */
            data?: components["schemas"]["Image"][] | null;
            /** Output Format */
            output_format?: ("png" | "webp" | "jpeg") | null;
            /** Quality */
            quality?: ("low" | "medium" | "high") | null;
            /** Size */
            size?: ("1024x1024" | "1024x1536" | "1536x1024") | null;
            usage?: components["schemas"]["Usage"] | null;
        } & {
            [key: string]: unknown;
        };
        /** IngestAsyncResponse */
        IngestAsyncResponse: {
            /** Message */
            message: string;
            /** File Url */
            file_url: string;
            /** Job Id */
            job_id: string;
        };
        /** InputAudio */
        InputAudio: {
            /** Data */
            data: string;
            /**
             * Format
             * @enum {string}
             */
            format: "wav" | "mp3";
        };
        /** IntervalTriggerModel */
        IntervalTriggerModel: {
            /**
             * Trigger
             * @default interval
             * @constant
             */
            trigger: "interval";
            /**
             * Seconds
             * @default 86400
             */
            seconds: number;
        };
        /**
         * JSONSchema
         * @description Structured Outputs configuration options, including a JSON Schema.
         */
        JSONSchema: {
            /** Name */
            name: string;
            /** Description */
            description?: string;
            /** Schema */
            schema?: {
                [key: string]: unknown;
            };
            /** Strict */
            strict?: boolean | null;
        };
        /** JobStatusSchema */
        JobStatusSchema: {
            /** Id */
            _id: string;
            /** User Id */
            user_id: string;
            /** Kb Id */
            kb_id?: string | null;
            /** Tenant Id */
            tenant_id?: string | null;
            /** Uploaded By User Id */
            uploaded_by_user_id?: string | null;
            /** Uploaded By Email */
            uploaded_by_email?: string | null;
            /** Status */
            status: string;
            /** Weaviate Status */
            weaviate_status: string;
            /** Graphrag Status */
            graphrag_status: string;
            /** Collection Name */
            collection_name?: string | null;
            /** Original Filename */
            original_filename?: string | null;
            /** S3 Url */
            s3_url?: string | null;
            /** Error Message */
            error_message?: string | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** KnowledgeBaseCreateRequest */
        KnowledgeBaseCreateRequest: {
            /**
             * Name
             * @description Human-readable name for the knowledge base.
             */
            name: string;
            /**
             * Description
             * @description Optional description of the knowledge base.
             */
            description?: string | null;
        };
        /** KnowledgeBaseMemberByEmailRequest */
        KnowledgeBaseMemberByEmailRequest: {
            /**
             * Email
             * @description Email of the user to add to the knowledge base.
             */
            email: string;
            /** @description Role to assign to the user within this knowledge base. */
            role: components["schemas"]["KnowledgeBaseRole"];
        };
        /** KnowledgeBaseMemberCreateRequest */
        KnowledgeBaseMemberCreateRequest: {
            /**
             * User Id
             * @description User ID to add to the knowledge base.
             */
            user_id: string;
            /** @description Role to assign to the user within this knowledge base. */
            role: components["schemas"]["KnowledgeBaseRole"];
        };
        /** KnowledgeBaseMemberUpdateRequest */
        KnowledgeBaseMemberUpdateRequest: {
            /** @description New role to assign to the user within this knowledge base. */
            role: components["schemas"]["KnowledgeBaseRole"];
        };
        /** KnowledgeBaseMembersBulkRequest */
        KnowledgeBaseMembersBulkRequest: {
            /**
             * Emails
             * @description List of emails to add.
             */
            emails: string[];
            role: components["schemas"]["KnowledgeBaseRole"];
        };
        /**
         * KnowledgeBaseMembershipResponse
         * @description Membership enriched with user details.
         */
        KnowledgeBaseMembershipResponse: {
            /** Id */
            _id: string;
            /** Kb Id */
            kb_id: string;
            /** User Id */
            user_id: string;
            role: components["schemas"]["KnowledgeBaseRole"];
            /**
             * Created At
             * Format: date-time
             */
            created_at?: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /** Email */
            email?: string | null;
            /**
             * Is Owner
             * @default false
             */
            is_owner: boolean;
        };
        /**
         * KnowledgeBaseResponse
         * @description KB enriched with stats for UI lists.
         */
        KnowledgeBaseResponse: {
            /** Id */
            _id: string;
            /** Name */
            name: string;
            /** Description */
            description?: string | null;
            /** Owner User Id */
            owner_user_id: string;
            /** Tenant Id */
            tenant_id: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at?: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * File Count
             * @default 0
             */
            file_count: number;
            /**
             * Member Count
             * @default 0
             */
            member_count: number;
            current_user_role: components["schemas"]["KnowledgeBaseRole"];
        };
        /**
         * KnowledgeBaseRole
         * @description Role within a knowledge base / workspace.
         * @enum {string}
         */
        KnowledgeBaseRole: "read" | "read_write" | "read_write_update" | "admin";
        /** KnowledgeBaseUpdateRequest */
        KnowledgeBaseUpdateRequest: {
            /** Name */
            name?: string | null;
            /** Description */
            description?: string | null;
        };
        /**
         * LastError
         * @description The last error associated with this vector store file.
         *
         *     Will be `null` if there are no errors.
         */
        LastError: {
            /**
             * Code
             * @enum {string}
             */
            code: "server_error" | "unsupported_file" | "invalid_file";
            /** Message */
            message: string;
        } & {
            [key: string]: unknown;
        };
        /** LlmChatOpenaiConfig */
        LlmChatOpenaiConfig: {
            /** Messages */
            messages: (components["schemas"]["ChatCompletionDeveloperMessageParam"] | components["schemas"]["ChatCompletionSystemMessageParam"] | components["schemas"]["ChatCompletionUserMessageParam-Input"] | components["schemas"]["ChatCompletionAssistantMessageParam-Input"] | components["schemas"]["ChatCompletionToolMessageParam"] | components["schemas"]["ChatCompletionFunctionMessageParam"])[];
            /**
             * Model
             * @default gpt-4.1-mini
             */
            model: ("gpt-5.4" | "gpt-5.4-mini" | "gpt-5.4-nano" | "gpt-5.4-mini-2026-03-17" | "gpt-5.4-nano-2026-03-17" | "gpt-5.3-chat-latest" | "gpt-5.2" | "gpt-5.2-2025-12-11" | "gpt-5.2-chat-latest" | "gpt-5.2-pro" | "gpt-5.2-pro-2025-12-11" | "gpt-5.1" | "gpt-5.1-2025-11-13" | "gpt-5.1-codex" | "gpt-5.1-mini" | "gpt-5.1-chat-latest" | "gpt-5" | "gpt-5-mini" | "gpt-5-nano" | "gpt-5-2025-08-07" | "gpt-5-mini-2025-08-07" | "gpt-5-nano-2025-08-07" | "gpt-5-chat-latest" | "gpt-4.1" | "gpt-4.1-mini" | "gpt-4.1-nano" | "gpt-4.1-2025-04-14" | "gpt-4.1-mini-2025-04-14" | "gpt-4.1-nano-2025-04-14" | "o4-mini" | "o4-mini-2025-04-16" | "o3" | "o3-2025-04-16" | "o3-mini" | "o3-mini-2025-01-31" | "o1" | "o1-2024-12-17" | "o1-preview" | "o1-preview-2024-09-12" | "o1-mini" | "o1-mini-2024-09-12" | "gpt-4o" | "gpt-4o-2024-11-20" | "gpt-4o-2024-08-06" | "gpt-4o-2024-05-13" | "gpt-4o-audio-preview" | "gpt-4o-audio-preview-2024-10-01" | "gpt-4o-audio-preview-2024-12-17" | "gpt-4o-audio-preview-2025-06-03" | "gpt-4o-mini-audio-preview" | "gpt-4o-mini-audio-preview-2024-12-17" | "gpt-4o-search-preview" | "gpt-4o-mini-search-preview" | "gpt-4o-search-preview-2025-03-11" | "gpt-4o-mini-search-preview-2025-03-11" | "chatgpt-4o-latest" | "codex-mini-latest" | "gpt-4o-mini" | "gpt-4o-mini-2024-07-18" | "gpt-4-turbo" | "gpt-4-turbo-2024-04-09" | "gpt-4-0125-preview" | "gpt-4-turbo-preview" | "gpt-4-1106-preview" | "gpt-4-vision-preview" | "gpt-4" | "gpt-4-0314" | "gpt-4-0613" | "gpt-4-32k" | "gpt-4-32k-0314" | "gpt-4-32k-0613" | "gpt-3.5-turbo" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo-0301" | "gpt-3.5-turbo-0613" | "gpt-3.5-turbo-1106" | "gpt-3.5-turbo-0125" | "gpt-3.5-turbo-16k-0613") | ("model-router" | "gpt-4.1" | "gpt-4.1-mini" | "gpt-4.1-nano" | "gpt-4o" | "gpt-4o-1120" | "gpt-4o-0806" | "gpt-4o-0513" | "gpt-4o-mini" | "o1" | "o1-mini" | "o3" | "o3-pro" | "o3-mini" | "o4-mini" | "gpt-4-32k" | "computer-use-preview" | "deepseek-r1") | string;
            audio?: components["schemas"]["ChatCompletionAudioParam"] | null;
            /** Frequency Penalty */
            frequency_penalty?: number | null;
            /** Logit Bias */
            logit_bias?: {
                [key: string]: number;
            } | null;
            /** Logprobs */
            logprobs?: boolean | null;
            /** Max Completion Tokens */
            max_completion_tokens?: number | null;
            /** Max Tokens */
            max_tokens?: number | null;
            /** Metadata */
            metadata?: {
                [key: string]: string;
            } | null;
            /** Modalities */
            modalities?: ("text" | "audio")[] | null;
            /**
             * N
             * @default 1
             */
            n: number | null;
            /** Parallel Tool Calls */
            parallel_tool_calls?: boolean | null;
            prediction?: components["schemas"]["ChatCompletionPredictionContentParam"] | null;
            /** Presence Penalty */
            presence_penalty?: number | null;
            /** Prompt Cache Key */
            prompt_cache_key?: string | null;
            /** Prompt Cache Retention */
            prompt_cache_retention?: ("in-memory" | "24h") | null;
            /** Reasoning Effort */
            reasoning_effort?: ("none" | "minimal" | "low" | "medium" | "high" | "xhigh") | null;
            /** Response Format */
            response_format?: components["schemas"]["ResponseFormatText"] | components["schemas"]["ResponseFormatJSONSchema"] | components["schemas"]["ResponseFormatJSONObject"] | null;
            /** Safety Identifier */
            safety_identifier?: string | null;
            /** Seed */
            seed?: number | null;
            /** Service Tier */
            service_tier?: ("auto" | "default" | "flex" | "scale" | "priority") | null;
            /** Stop */
            stop?: string | string[] | null;
            /** Store */
            store?: boolean | null;
            /**
             * Stream
             * @default false
             */
            stream: boolean | null;
            stream_options?: components["schemas"]["ChatCompletionStreamOptionsParam"] | null;
            /** Temperature */
            temperature?: number | null;
            /** Tool Choice */
            tool_choice?: ("none" | "auto" | "required") | components["schemas"]["ChatCompletionAllowedToolChoiceParam"] | components["schemas"]["ChatCompletionNamedToolChoiceParam"] | components["schemas"]["ChatCompletionNamedToolChoiceCustomParam"] | null;
            /** Tools */
            tools?: (components["schemas"]["ChatCompletionFunctionToolParam"] | string)[] | null;
            /** Top Logprobs */
            top_logprobs?: number | null;
            /** Top P */
            top_p?: number | null;
            /** User */
            user?: string | null;
            /** Verbosity */
            verbosity?: ("low" | "medium" | "high") | null;
            web_search_options?: components["schemas"]["WebSearchOptions"] | null;
            output_type?: components["schemas"]["OutputType"] | null;
            /** Json Schema */
            json_schema?: {
                [key: string]: unknown;
            } | null;
            /** Response Schema */
            response_schema?: components["schemas"]["StructuredOutputSchema"] | {
                [key: string]: unknown;
            } | null;
            /** Extra Headers */
            extra_headers?: {
                [key: string]: string;
            } | null;
            /** Extra Query */
            extra_query?: {
                [key: string]: unknown;
            } | null;
            /** Extra Body */
            extra_body?: unknown | null;
            /**
             * Timeout
             * @default 900
             */
            timeout: number | null;
            /**
             * Provider
             * @enum {string}
             */
            provider: "azure" | "openai";
            /**
             * Tool Output Text To File Char Limit
             * @default 75000
             */
            tool_output_text_to_file_char_limit: number | null;
        };
        /** LookerClientCredentialsRequest */
        LookerClientCredentialsRequest: {
            /** Base Url */
            base_url: string;
            /** Client Id */
            client_id: string;
            /** Client Secret */
            client_secret: string;
        };
        /** MCPCreate */
        MCPCreate: {
            /**
             * Server Name
             * @description The name of the model context server.
             */
            server_name: string;
            /**
             * Server Type
             * @enum {string}
             */
            server_type: "SSE" | "StreamableHttp";
            /**
             * Server Url
             * @description The URL of the model context server.
             */
            server_url: string;
            /**
             * Description
             * @description A brief description of the model context server.
             */
            description?: string | null;
            /**
             * Allowed Tools
             * @description A list of tool names that are permitted to use this model context server.
             */
            allowed_tools?: string[] | null;
            /**
             * Request Headers
             * @description Optional HTTP headers to include in requests (e.g., Authorization, Content-Type).
             */
            request_headers?: {
                [key: string]: string;
            } | null;
            /**
             * Oauth Token
             * @description Optional OAuth token for authenticating with the model context server.
             */
            oauth_token?: string | null;
        };
        /** MCPDoc */
        MCPDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at?: string;
            /**
             * Server Name
             * @description The name of the model context server.
             */
            server_name: string;
            /**
             * Server Type
             * @enum {string}
             */
            server_type: "SSE" | "StreamableHttp";
            /**
             * Server Url
             * @description The URL of the model context server.
             */
            server_url: string;
            /**
             * Description
             * @description A brief description of the model context server.
             */
            description?: string | null;
            /**
             * Allowed Tools
             * @description A list of tool names that are permitted to use this model context server.
             */
            allowed_tools?: string[] | null;
            /**
             * Request Headers
             * @description Optional HTTP headers to include in requests (e.g., Authorization, Content-Type).
             */
            request_headers?: {
                [key: string]: string;
            } | null;
            /**
             * Oauth Token
             * @description Optional OAuth token for authenticating with the model context server.
             */
            oauth_token?: string | null;
            /** User Id */
            user_id: string;
            /** Id */
            _id: string;
        };
        /** MCPDocsFound */
        MCPDocsFound: {
            /** Docs */
            docs: components["schemas"]["MCPDoc"][];
            /** Total Count */
            total_count: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** MCPUpdate */
        MCPUpdate: {
            /** Server Name */
            server_name?: string | null;
            /** Server Type */
            server_type?: ("SSE" | "StreamableHttp") | null;
            /** Server Url */
            server_url?: string | null;
            /** Description */
            description?: string | null;
            /** Allowed Tools */
            allowed_tools?: string[] | null;
            /** Request Headers */
            request_headers?: {
                [key: string]: string;
            } | null;
            /** Oauth Token */
            oauth_token?: string | null;
        };
        /** Message */
        Message: {
            role: components["schemas"]["Role"];
            /** Content */
            content: string | {
                [key: string]: unknown;
            }[];
        };
        /** Metadata */
        Metadata: {
            /**
             * Process Url In Text
             * @default false
             */
            process_url_in_text: boolean;
            /**
             * Process Attachment Url
             * @default true
             */
            process_attachment_url: boolean;
            /**
             * Attachment Requested
             * @default 0
             */
            attachment_requested: number;
        };
        /**
         * MetricHistoryResponse
         * @description Historical metric data response
         */
        MetricHistoryResponse: {
            metric_type: components["schemas"]["MetricType"];
            /** Data Points */
            data_points: components["schemas"]["TimeSeriesDataPoint"][];
            /** Summary Stats */
            summary_stats: {
                [key: string]: number;
            };
            /**
             * Generated At
             * Format: date-time
             */
            generated_at: string;
        };
        /**
         * MetricType
         * @enum {string}
         */
        MetricType: "total_agents" | "active_workflows" | "scheduled_jobs" | "total_workflow_runs" | "time_saved" | "dollars_saved" | "roi_percentage" | "additional_revenue";
        /**
         * NetSuiteTBARequest
         * @description Token-Based Authentication (TBA) for NetSuite SuiteTalk (OAuth 1.0):
         *     - realm == account_id
         *     - signature method HMAC-SHA256 (used per-request)
         */
        NetSuiteTBARequest: {
            /** Account Id */
            account_id: string;
            /** Consumer Key */
            consumer_key: string;
            /** Consumer Secret */
            consumer_secret: string;
            /** Access Token */
            access_token: string;
            /** Token Secret */
            token_secret: string;
            /** Base Url */
            base_url?: string | null;
        };
        /** Node */
        "Node-Input": {
            /** Id */
            id: string;
            position?: components["schemas"]["Position"] | null;
            /** Type */
            type?: string | null;
            data: components["schemas"]["NodeData"];
        };
        /** Node */
        "Node-Output": {
            /** Id */
            id: string;
            position?: components["schemas"]["Position"] | null;
            /** Type */
            type?: string | null;
            data: components["schemas"]["NodeData"];
        };
        /** NodeData */
        NodeData: {
            /** Label */
            label: string;
            /** Actionid */
            actionId: string;
            type?: components["schemas"]["ActionType"] | null;
            /** Updated At */
            updated_at?: string | null;
            /** Characterid */
            characterId?: string | null;
            /** @default only_output */
            data_flow_type: components["schemas"]["DataFlowType"];
            /**
             * User Review Required
             * @default false
             */
            user_review_required: boolean;
            /**
             * User Review Done
             * @default false
             */
            user_review_done: boolean;
            /**
             * User Input Required
             * @default false
             */
            user_input_required: boolean;
            /**
             * User Input Done
             * @default false
             */
            user_input_done: boolean;
            /**
             * Is Loop
             * @default false
             */
            is_loop: boolean;
            /**
             * Seperator
             * @default |
             */
            seperator: string;
            /**
             * Is Split
             * @default false
             */
            is_split: boolean;
            /**
             * File Split
             * @default false
             */
            file_split: boolean;
            /**
             * Api Loop
             * @default false
             */
            api_loop: boolean;
            /**
             * Excel Loop
             * @default false
             */
            excel_loop: boolean;
            /**
             * Header
             * @default false
             */
            header: boolean;
            /**
             * Data Processing
             * @default false
             */
            data_processing: boolean;
            /**
             * File Processing
             * @default false
             */
            file_processing: boolean;
            /**
             * File Column Index
             * @default 0
             */
            file_column_index: number;
            /**
             * Instruction Column Index
             * @default 0
             */
            instruction_column_index: number;
            /**
             * Batches
             * @default 0
             */
            batches: number;
            /**
             * Process Url In Text
             * @default true
             */
            process_url_in_text: boolean;
            /**
             * Process Attachment Url
             * @default true
             */
            process_attachment_url: boolean;
            /**
             * Attachment Requested
             * @default 0
             */
            attachment_requested: number;
            /**
             * Sleep Time
             * @description Seconds to sleep before executing the node action.
             * @default 0
             */
            sleep_time: number;
        };
        /**
         * OtherFileChunkingStrategyObject
         * @description This is returned when the chunking strategy is unknown.
         *
         *     Typically, this is because the file was indexed before the `chunking_strategy` concept was introduced in the API.
         */
        OtherFileChunkingStrategyObject: {
            /**
             * Type
             * @constant
             */
            type: "other";
        } & {
            [key: string]: unknown;
        };
        /**
         * OutputType
         * @enum {string}
         */
        OutputType: "text" | "json" | "markdown";
        /** PartitionParametersParams */
        PartitionParametersParams: {
            /** Chunking Strategy */
            chunking_strategy?: "by_title" | null;
            /** Combine Under N Chars */
            combine_under_n_chars?: number | null;
            /** Coordinates */
            coordinates?: boolean | null;
            /** Encoding */
            encoding?: string | null;
            /** Extract Image Block Types */
            extract_image_block_types?: string[] | null;
            /** Gz Uncompressed Content Type */
            gz_uncompressed_content_type?: string | null;
            /** Hi Res Model Name */
            hi_res_model_name?: ("detectron2_onnx" | "yolox" | "yolox_quantized" | "chipper") | null;
            /** Include Page Breaks */
            include_page_breaks?: boolean | null;
            /** Languages */
            languages?: string[] | null;
            /** Max Characters */
            max_characters?: number | null;
            /** Multipage Sections */
            multipage_sections?: boolean | null;
            /** New After N Chars */
            new_after_n_chars?: number | null;
            /** Output Format */
            output_format?: string | null;
            /** Overlap */
            overlap?: number | null;
            /** Overlap All */
            overlap_all?: boolean | null;
            /** Pdf Infer Table Structure */
            pdf_infer_table_structure?: boolean | null;
            /** Skip Infer Table Types */
            skip_infer_table_types?: string[] | null;
            /** Split Pdf Page */
            split_pdf_page?: boolean | null;
            /** Strategy */
            strategy?: ("fast" | "hi_res" | "auto") | null;
            /** Xml Keep Tags */
            xml_keep_tags?: boolean | null;
        };
        /** Position */
        Position: {
            /** X */
            x: number;
            /** Y */
            y: number;
        };
        /** PromptCreate */
        PromptCreate: {
            /** Name */
            name: string;
            /**
             * Tags
             * @default []
             */
            tags: string[];
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            blocks: components["schemas"]["DataBlocks-Input"];
        };
        /** PromptDoc */
        PromptDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at?: string;
            /** Name */
            name: string;
            /**
             * Tags
             * @default []
             */
            tags: string[];
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            blocks: components["schemas"]["DataBlocks-Output"];
            /** User Id */
            user_id: string;
            /** Id */
            _id: string;
        };
        /** PromptLiteDoc */
        PromptLiteDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at?: string;
            /** Name */
            name: string;
            /**
             * Tags
             * @default []
             */
            tags: string[];
            /**
             * Is Published
             * @default false
             */
            is_published: boolean;
            blocks: components["schemas"]["DataBlocks-Output"];
            /** User Id */
            user_id: string;
            /** Id */
            _id: string;
        };
        /** PromptLiteDocPage */
        PromptLiteDocPage: {
            /** Docs */
            docs: components["schemas"]["PromptLiteDoc"][];
            /** Total Count */
            total_count: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** PromptUpdate */
        PromptUpdate: {
            /** Name */
            name?: string | null;
            /** Tags */
            tags?: string[] | null;
            /** Is Published */
            is_published?: boolean | null;
            blocks?: components["schemas"]["DataBlocks-Input"] | null;
        };
        /** ReadUrlConfig */
        ReadUrlConfig: {
            /** Url */
            url?: string | null;
            /**
             * Xpath
             * @default /html/body
             */
            xpath: string;
            /**
             * Attribute
             * @default
             */
            attribute: string;
        };
        /**
         * Region
         * @enum {string}
         */
        Region: "Arabia" | "Arabia_en" | "Argentina" | "Australia" | "Austria" | "Belgium_fr" | "Belgium_nl" | "Brazil" | "Bulgaria" | "Canada_en" | "Canada_fr" | "Catalan" | "Chile" | "China" | "Colombia" | "Croatia" | "Czech_Republic" | "Denmark" | "Estonia" | "Finland" | "France" | "Germany" | "Greece" | "Hong_Kong" | "Hungary" | "India" | "Indonesia" | "Indonesia_en" | "Ireland" | "Israel" | "Italy" | "Japan" | "Korea" | "Latvia" | "Lithuania" | "Latin_America" | "Malaysia" | "Malaysia_en" | "Mexico" | "Netherlands" | "New_Zealand" | "Norway" | "Peru" | "Philippines_en" | "Philippines_tl" | "Poland" | "Portugal" | "Romania" | "Russia" | "Singapore_en" | "Slovak_Republic" | "Slovenia" | "South_Africa" | "Spain" | "Sweden_sv" | "Switzerland_de" | "Switzerland_fr" | "Switzerland_it" | "Taiwan" | "Thailand" | "Turkey" | "Ukraine" | "United_Kingdom_en" | "United_States_en" | "United_States_es" | "Venezuela" | "Vietnam_vi" | "No_Region";
        /**
         * ResponseFormatJSONObject
         * @description JSON object response format.
         *
         *     An older method of generating JSON responses.
         *     Using `json_schema` is recommended for models that support it. Note that the
         *     model will not generate JSON without a system or user message instructing it
         *     to do so.
         */
        ResponseFormatJSONObject: {
            /**
             * Type
             * @constant
             */
            type: "json_object";
        };
        /**
         * ResponseFormatJSONSchema
         * @description JSON Schema response format.
         *
         *     Used to generate structured JSON responses.
         *     Learn more about [Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs).
         */
        ResponseFormatJSONSchema: {
            json_schema: components["schemas"]["JSONSchema"];
            /**
             * Type
             * @constant
             */
            type: "json_schema";
        };
        /**
         * ResponseFormatText
         * @description Default response format. Used to generate text responses.
         */
        ResponseFormatText: {
            /**
             * Type
             * @constant
             */
            type: "text";
        };
        /** RetrieveVectorStore */
        RetrieveVectorStore: {
            /** Vector Store Id */
            vector_store_id: string;
        };
        /** RetrieveVectorStoreFileBatch */
        RetrieveVectorStoreFileBatch: {
            /** Vector Store Id */
            vector_store_id: string;
            /** Batch Id */
            batch_id: string;
        };
        /**
         * Role
         * @enum {string}
         */
        Role: "system" | "user" | "assistant";
        /**
         * RunnableType
         * @enum {string}
         */
        RunnableType: "action" | "action_graph";
        /** ScheduleCreate */
        ScheduleCreate: {
            /** Name */
            name: string;
            /** Trigger */
            trigger: components["schemas"]["CronSchedule-Input"] | components["schemas"]["IntervalTriggerModel"];
            /** Runnable Id */
            runnable_id: string;
            input: components["schemas"]["DataBlock-Input"];
            /** Run Id */
            run_id?: string | null;
        };
        /** ScheduleDoc */
        ScheduleDoc: {
            /** Name */
            name: string;
            /** Trigger */
            trigger: components["schemas"]["CronSchedule-Output"] | components["schemas"]["IntervalTriggerModel"];
            /** Runnable Id */
            runnable_id: string;
            input: components["schemas"]["DataBlock-Output"];
            /** Run Id */
            run_id?: string | null;
            /** Job Id */
            job_id: string;
            /** User Id */
            user_id: string;
            /** Id */
            _id: string;
        };
        /** ScheduleUpdate */
        ScheduleUpdate: {
            /** Name */
            name?: string | null;
            /** Trigger */
            trigger?: components["schemas"]["CronSchedule-Input"] | components["schemas"]["IntervalTriggerModel"] | null;
            /** Runnable Id */
            runnable_id?: string | null;
            input?: components["schemas"]["DataBlock-Input"] | null;
            /** Run Id */
            run_id?: string | null;
        };
        /**
         * SearchResult
         * @description A standardized search result model for different vector backends.
         */
        SearchResult: {
            /** Data */
            data: string;
            /** Sources */
            sources?: string | null;
            /** Score */
            score?: number | null;
            /** Metadata */
            metadata?: {
                [key: string]: unknown;
            } | null;
        };
        /** SearchTextParams */
        SearchTextParams: {
            /**
             * Keywords
             * @default
             */
            keywords: string;
            /** @default No_Region */
            region: components["schemas"]["Region"];
            /**
             * Safesearch
             * @default moderate
             * @enum {string}
             */
            safesearch: "on" | "moderate" | "off";
            timelimit?: components["schemas"]["Timelimit"] | null;
            /**
             * Max Results
             * @default 3
             */
            max_results: number;
        };
        /** SearchWebConfig */
        SearchWebConfig: {
            /**
             * Search Type
             * @default web
             * @enum {string}
             */
            search_type: "web" | "news";
            search_params: components["schemas"]["SearchTextParams"];
        };
        /** Session */
        Session: {
            /** Provider Token */
            provider_token?: string | null;
            /** Provider Refresh Token */
            provider_refresh_token?: string | null;
            /** Access Token */
            access_token: string;
            /** Refresh Token */
            refresh_token: string;
            /** Expires In */
            expires_in: number;
            /** Expires At */
            expires_at?: number | null;
            /** Token Type */
            token_type: string;
            user: components["schemas"]["User"];
        };
        /** ShareDataCreate */
        ShareDataCreate: {
            /** Data Id */
            data_id: string;
            runnable_type: components["schemas"]["RunnableType"];
        };
        /** ShareDataDoc */
        ShareDataDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at?: string;
            /** Data Id */
            data_id: string;
            runnable_type: components["schemas"]["RunnableType"];
            /** User Id */
            user_id: string;
            /** Id */
            _id: string;
        };
        /** ShareDataDocsPage */
        ShareDataDocsPage: {
            /** Docs */
            docs: components["schemas"]["ShareDataDoc"][];
            /** Total Count */
            total_count: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** ShareDataUpdate */
        ShareDataUpdate: {
            /** Data Id */
            data_id?: string | null;
            runnable_type?: components["schemas"]["RunnableType"] | null;
        };
        /** SiriAutomationPayload */
        SiriAutomationPayload: {
            /**
             * Email
             * Format: email
             */
            email: string;
            /** Password */
            password: string;
            /** Command */
            command: string;
        };
        /** SourceChunk */
        SourceChunk: {
            /** Chunk Id */
            chunk_id: string;
            /** Document Id */
            document_id?: string | null;
            /** Source */
            source: string;
            /** S3 Url */
            s3_url?: string | null;
            /** Text Preview */
            text_preview: string;
            /** Score */
            score: number;
            /** Metadata */
            metadata?: {
                [key: string]: unknown;
            };
        };
        /** SpeechReq */
        SpeechReq: {
            /** Input */
            input: string;
            /**
             * Model
             * @default tts-1-hd
             * @enum {string}
             */
            model: "tts-1-hd" | "tts";
            /**
             * Voice
             * @default alloy
             * @enum {string}
             */
            voice: "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";
            /**
             * Response Format
             * @default mp3
             * @enum {string}
             */
            response_format: "mp3" | "opus" | "aac" | "flac" | "wav" | "pcm";
            /**
             * Speed
             * @default 1
             */
            speed: number;
        };
        /** SpotifyClientCredentialsRequest */
        SpotifyClientCredentialsRequest: {
            /** Client Id */
            client_id: string;
            /** Client Secret */
            client_secret: string;
        };
        /** StaticFileChunkingStrategy */
        StaticFileChunkingStrategy: {
            /** Chunk Overlap Tokens */
            chunk_overlap_tokens: number;
            /** Max Chunk Size Tokens */
            max_chunk_size_tokens: number;
        } & {
            [key: string]: unknown;
        };
        /** StaticFileChunkingStrategyObject */
        StaticFileChunkingStrategyObject: {
            static: components["schemas"]["StaticFileChunkingStrategy"];
            /**
             * Type
             * @constant
             */
            type: "static";
        } & {
            [key: string]: unknown;
        };
        /**
         * StaticFileChunkingStrategyObjectParam
         * @description Customize your own chunking strategy by setting chunk size and chunk overlap.
         */
        StaticFileChunkingStrategyObjectParam: {
            static: components["schemas"]["StaticFileChunkingStrategyParam"];
            /**
             * Type
             * @constant
             */
            type: "static";
        };
        /** StaticFileChunkingStrategyParam */
        StaticFileChunkingStrategyParam: {
            /** Chunk Overlap Tokens */
            chunk_overlap_tokens: number;
            /** Max Chunk Size Tokens */
            max_chunk_size_tokens: number;
        };
        /**
         * StructuredOutputSchema
         * @description Schema for structured outputs using JSON Schema.
         */
        StructuredOutputSchema: {
            /**
             * Type
             * @default object
             */
            type: string;
            /** Properties */
            properties: {
                [key: string]: unknown;
            };
            /** Required */
            required?: string[] | null;
            /** Description */
            description?: string | null;
            /**
             * Strict
             * @default true
             */
            strict: boolean;
        };
        /** TeamCreate */
        TeamCreate: {
            /** Name */
            name: string;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * Tags
             * @default []
             */
            tags: string[];
            /** Leader */
            leader: string;
        };
        /** TeamDoc */
        TeamDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at?: string;
            /** Name */
            name: string;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * Tags
             * @default []
             */
            tags: string[];
            /** Leader */
            leader: string;
            /** User Id */
            user_id: string;
            /** Id */
            _id: string;
        };
        /** TeamLiteDoc */
        TeamLiteDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at?: string;
            /** Name */
            name: string;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * Tags
             * @default []
             */
            tags: string[];
            /** Leader */
            leader: string;
            /** User Id */
            user_id: string;
            /** Id */
            _id: string;
        };
        /** TeamLiteDocPage */
        TeamLiteDocPage: {
            /** Docs */
            docs: components["schemas"]["TeamLiteDoc"][];
            /** Total Count */
            total_count: number;
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
        };
        /** TeamUpdate */
        TeamUpdate: {
            /** Name */
            name: string;
            /**
             * Description
             * @default
             */
            description: string;
            /**
             * Tags
             * @default []
             */
            tags: string[];
            /** Leader */
            leader: string;
        };
        /** TextObj */
        TextObj: {
            /**
             * Text
             * @default
             */
            text: string;
        };
        /** TextObjs */
        TextObjs: {
            /**
             * Texts
             * @default []
             */
            texts: components["schemas"]["TextObj"][];
        };
        /**
         * TimeRange
         * @enum {string}
         */
        TimeRange: "last_7_days" | "last_30_days" | "last_90_days" | "last_year" | "custom";
        /**
         * TimeRangeConfig
         * @description Configuration for time saved ranges
         */
        TimeRangeConfig: {
            /**
             * Action Min Hours
             * @description Minimum hours saved per action
             * @default 0.5
             */
            action_min_hours: number;
            /**
             * Action Max Hours
             * @description Maximum hours saved per action
             * @default 2
             */
            action_max_hours: number;
            /**
             * Workflow Min Hours
             * @description Minimum hours saved per workflow
             * @default 2
             */
            workflow_min_hours: number;
            /**
             * Workflow Max Hours
             * @description Maximum hours saved per workflow
             * @default 5
             */
            workflow_max_hours: number;
        };
        /**
         * TimeSeriesDataPoint
         * @description Data point for time series charts
         */
        TimeSeriesDataPoint: {
            /**
             * Date
             * Format: date-time
             */
            date: string;
            /** Value */
            value: number;
            /** Label */
            label?: string | null;
        };
        /**
         * Timelimit
         * @enum {string}
         */
        Timelimit: "all" | "day" | "week" | "month" | "year";
        /**
         * TimezoneEnum
         * @enum {string}
         */
        TimezoneEnum: "America/Los_Angeles" | "America/New_York" | "America/Chicago" | "America/Denver" | "UTC" | "Europe/London" | "Europe/Paris" | "Europe/Berlin" | "Asia/Kolkata" | "Asia/Tokyo" | "Asia/Shanghai" | "Asia/Singapore" | "Australia/Sydney" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Factory" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "Universal" | "W-SU" | "WET" | "Zulu";
        /**
         * ToolResources
         * @description A set of resources that are used by the assistant's tools.
         *
         *     The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
         */
        "ToolResources-Output": {
            code_interpreter?: components["schemas"]["ToolResourcesCodeInterpreter-Output"] | null;
            file_search?: components["schemas"]["ToolResourcesFileSearch-Output"] | null;
        } & {
            [key: string]: unknown;
        };
        /** ToolResourcesCodeInterpreter */
        "ToolResourcesCodeInterpreter-Output": {
            /** File Ids */
            file_ids?: string[] | null;
        } & {
            [key: string]: unknown;
        };
        /** ToolResourcesFileSearch */
        "ToolResourcesFileSearch-Output": {
            /** Vector Store Ids */
            vector_store_ids?: string[] | null;
        } & {
            [key: string]: unknown;
        };
        /** ToolResourcesFileSearchVectorStore */
        ToolResourcesFileSearchVectorStore: {
            /** Chunking Strategy */
            chunking_strategy?: components["schemas"]["ToolResourcesFileSearchVectorStoreChunkingStrategyAuto"] | components["schemas"]["ToolResourcesFileSearchVectorStoreChunkingStrategyStatic"];
            /** File Ids */
            file_ids?: string[];
            /** Metadata */
            metadata?: {
                [key: string]: string;
            } | null;
        };
        /**
         * ToolResourcesFileSearchVectorStoreChunkingStrategyAuto
         * @description The default strategy.
         *
         *     This strategy currently uses a `max_chunk_size_tokens` of `800` and `chunk_overlap_tokens` of `400`.
         */
        ToolResourcesFileSearchVectorStoreChunkingStrategyAuto: {
            /**
             * Type
             * @constant
             */
            type: "auto";
        };
        /** ToolResourcesFileSearchVectorStoreChunkingStrategyStatic */
        ToolResourcesFileSearchVectorStoreChunkingStrategyStatic: {
            static: components["schemas"]["ToolResourcesFileSearchVectorStoreChunkingStrategyStaticStatic"];
            /**
             * Type
             * @constant
             */
            type: "static";
        };
        /** ToolResourcesFileSearchVectorStoreChunkingStrategyStaticStatic */
        ToolResourcesFileSearchVectorStoreChunkingStrategyStaticStatic: {
            /** Chunk Overlap Tokens */
            chunk_overlap_tokens: number;
            /** Max Chunk Size Tokens */
            max_chunk_size_tokens: number;
        };
        /** TranscriptionReq */
        TranscriptionReq: {
            /** File Url */
            file_url?: string | null;
            /**
             * Model
             * @default whisper-1
             * @constant
             */
            model: "whisper-1";
            /**
             * Language
             * @default en
             */
            language: string;
            /**
             * Prompt
             * @default
             */
            prompt: string;
            /**
             * Response Format
             * @default json
             * @enum {string}
             */
            response_format: "json" | "text" | "srt" | "verbose_json" | "vtt";
            /**
             * Temperature
             * @default 0.2
             */
            temperature: number;
        };
        /** TranslationReq */
        TranslationReq: {
            /** File Url */
            file_url?: string | null;
            /**
             * Model
             * @default whisper-1
             * @constant
             */
            model: "whisper-1";
            /**
             * Prompt
             * @default
             */
            prompt: string;
            /**
             * Response Format
             * @default json
             * @enum {string}
             */
            response_format: "json" | "text" | "srt" | "verbose_json" | "vtt";
            /**
             * Temperature
             * @default 0.2
             */
            temperature: number;
        };
        /** UpdateVectorStore */
        UpdateVectorStore: {
            /** Vector Store Id */
            vector_store_id: string;
            /** Name */
            name?: string | null;
            /** After */
            after?: string | null;
            /** Before */
            before?: string | null;
        };
        /** UrlObj */
        UrlObj: {
            /**
             * Url
             * Format: uri
             */
            url: string;
        };
        /** UrlResponse */
        UrlResponse: {
            /**
             * Url
             * Format: uri
             */
            url: string;
        };
        /**
         * Usage
         * @description For `gpt-image-1` only, the token usage information for the image generation.
         */
        Usage: {
            /** Input Tokens */
            input_tokens: number;
            input_tokens_details: components["schemas"]["UsageInputTokensDetails"];
            /** Output Tokens */
            output_tokens: number;
            /** Total Tokens */
            total_tokens: number;
            output_tokens_details?: components["schemas"]["UsageOutputTokensDetails"] | null;
        } & {
            [key: string]: unknown;
        };
        /**
         * UsageInputTokensDetails
         * @description The input tokens detailed information for the image generation.
         */
        UsageInputTokensDetails: {
            /** Image Tokens */
            image_tokens: number;
            /** Text Tokens */
            text_tokens: number;
        } & {
            [key: string]: unknown;
        };
        /**
         * UsageOutputTokensDetails
         * @description The output token details for the image generation.
         */
        UsageOutputTokensDetails: {
            /** Image Tokens */
            image_tokens: number;
            /** Text Tokens */
            text_tokens: number;
        } & {
            [key: string]: unknown;
        };
        /** User */
        User: {
            /** Id */
            id: string;
            /** App Metadata */
            app_metadata: {
                [key: string]: unknown;
            };
            /** User Metadata */
            user_metadata: {
                [key: string]: unknown;
            };
            /** Aud */
            aud: string;
            /** Confirmation Sent At */
            confirmation_sent_at?: string | null;
            /** Recovery Sent At */
            recovery_sent_at?: string | null;
            /** Email Change Sent At */
            email_change_sent_at?: string | null;
            /** New Email */
            new_email?: string | null;
            /** New Phone */
            new_phone?: string | null;
            /** Invited At */
            invited_at?: string | null;
            /** Action Link */
            action_link?: string | null;
            /** Email */
            email?: string | null;
            /** Phone */
            phone?: string | null;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /** Confirmed At */
            confirmed_at?: string | null;
            /** Email Confirmed At */
            email_confirmed_at?: string | null;
            /** Phone Confirmed At */
            phone_confirmed_at?: string | null;
            /** Last Sign In At */
            last_sign_in_at?: string | null;
            /** Role */
            role?: string | null;
            /** Updated At */
            updated_at?: string | null;
            /** Identities */
            identities?: components["schemas"]["UserIdentity"][] | null;
            /**
             * Is Anonymous
             * @default false
             */
            is_anonymous: boolean;
            /**
             * Is Sso User
             * @default false
             */
            is_sso_user: boolean;
            /** Factors */
            factors?: components["schemas"]["Factor"][] | null;
            /** Deleted At */
            deleted_at?: string | null;
            /** Banned Until */
            banned_until?: string | null;
        };
        /** UserAttributes */
        UserAttributes: {
            /** Email */
            email?: string;
            /** Phone */
            phone?: string;
            /** Password */
            password?: string;
            /** Data */
            data?: unknown;
            /** Nonce */
            nonce?: string;
        };
        /** UserIdentity */
        UserIdentity: {
            /** Id */
            id: string;
            /** Identity Id */
            identity_id: string;
            /** User Id */
            user_id: string;
            /** Identity Data */
            identity_data: {
                [key: string]: unknown;
            };
            /** Provider */
            provider: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /** Last Sign In At */
            last_sign_in_at?: string | null;
            /** Updated At */
            updated_at?: string | null;
        };
        /** ValidationError */
        ValidationError: {
            /** Location */
            loc: (string | number)[];
            /** Message */
            msg: string;
            /** Error Type */
            type: string;
            /** Input */
            input?: unknown;
            /** Context */
            ctx?: Record<string, never>;
        };
        /**
         * VectorStore
         * @description A vector store is a collection of processed files can be used by the `file_search` tool.
         */
        VectorStore: {
            /** Id */
            id: string;
            /** Created At */
            created_at: number;
            file_counts: components["schemas"]["FileCounts"];
            /** Last Active At */
            last_active_at?: number | null;
            /** Metadata */
            metadata?: {
                [key: string]: string;
            } | null;
            /** Name */
            name: string;
            /**
             * Object
             * @constant
             */
            object: "vector_store";
            /**
             * Status
             * @enum {string}
             */
            status: "expired" | "in_progress" | "completed";
            /** Usage Bytes */
            usage_bytes: number;
            expires_after?: components["schemas"]["ExpiresAfter-Output"] | null;
            /** Expires At */
            expires_at?: number | null;
        } & {
            [key: string]: unknown;
        };
        /** VectorStoreDeleted */
        VectorStoreDeleted: {
            /** Id */
            id: string;
            /** Deleted */
            deleted: boolean;
            /**
             * Object
             * @constant
             */
            object: "vector_store.deleted";
        } & {
            [key: string]: unknown;
        };
        /**
         * VectorStoreFile
         * @description A list of files attached to a vector store.
         */
        VectorStoreFile: {
            /** Id */
            id: string;
            /** Created At */
            created_at: number;
            last_error?: components["schemas"]["LastError"] | null;
            /**
             * Object
             * @constant
             */
            object: "vector_store.file";
            /**
             * Status
             * @enum {string}
             */
            status: "in_progress" | "completed" | "cancelled" | "failed";
            /** Usage Bytes */
            usage_bytes: number;
            /** Vector Store Id */
            vector_store_id: string;
            /** Attributes */
            attributes?: {
                [key: string]: string | number | boolean;
            } | null;
            /** Chunking Strategy */
            chunking_strategy?: components["schemas"]["StaticFileChunkingStrategyObject"] | components["schemas"]["OtherFileChunkingStrategyObject"] | null;
        } & {
            [key: string]: unknown;
        };
        /**
         * VectorStoreFileBatch
         * @description A batch of files attached to a vector store.
         */
        VectorStoreFileBatch: {
            /** Id */
            id: string;
            /** Created At */
            created_at: number;
            file_counts: components["schemas"]["FileCounts"];
            /**
             * Object
             * @constant
             */
            object: "vector_store.files_batch";
            /**
             * Status
             * @enum {string}
             */
            status: "in_progress" | "completed" | "cancelled" | "failed";
            /** Vector Store Id */
            vector_store_id: string;
        } & {
            [key: string]: unknown;
        };
        /** VectorStoreFileDeleted */
        VectorStoreFileDeleted: {
            /** Id */
            id: string;
            /** Deleted */
            deleted: boolean;
            /**
             * Object
             * @constant
             */
            object: "vector_store.file.deleted";
        } & {
            [key: string]: unknown;
        };
        /**
         * VoiceID
         * @description Custom voice reference.
         */
        VoiceID: {
            /** Id */
            id: string;
        };
        /**
         * WebSearchOptions
         * @description This tool searches the web for relevant results to use in a response.
         *     Learn more about the [web search tool](https://platform.openai.com/docs/guides/tools-web-search?api-mode=chat).
         */
        WebSearchOptions: {
            /**
             * Search Context Size
             * @enum {string}
             */
            search_context_size?: "low" | "medium" | "high";
            user_location?: components["schemas"]["WebSearchOptionsUserLocation"] | null;
        };
        /**
         * WebSearchOptionsUserLocation
         * @description Approximate location parameters for the search.
         */
        WebSearchOptionsUserLocation: {
            approximate: components["schemas"]["WebSearchOptionsUserLocationApproximate"];
            /**
             * Type
             * @constant
             */
            type: "approximate";
        };
        /**
         * WebSearchOptionsUserLocationApproximate
         * @description Approximate location parameters for the search.
         */
        WebSearchOptionsUserLocationApproximate: {
            /** City */
            city?: string;
            /** Country */
            country?: string;
            /** Region */
            region?: string;
            /** Timezone */
            timezone?: string;
        };
        /** Webhook */
        Webhook: {
            /**
             * Url
             * Format: uri
             */
            url: string;
            /**
             * Track Id
             * @default
             */
            track_id: string;
        };
        /** WebhookCreate */
        WebhookCreate: {
            /** Runnable Id */
            runnable_id: string;
            /** Run Id */
            run_id?: string | null;
        };
        /** WebhookDoc */
        WebhookDoc: {
            /**
             * Updated At
             * Format: date-time
             */
            updated_at?: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at?: string;
            /** User Id */
            user_id: string;
            /** Runnable Id */
            runnable_id: string;
            /** Run Id */
            run_id?: string | null;
            /** Webhook Id */
            webhook_id?: string;
            /** Webhook Path */
            webhook_path?: string | null;
            /** Id */
            _id: string;
        };
        /** WebhookUpdate */
        WebhookUpdate: {
            /** Runnable Id */
            runnable_id?: string | null;
            /** Run Id */
            run_id?: string | null;
        };
        /**
         * WorkflowPerformance
         * @description Workflow performance metrics
         */
        WorkflowPerformance: {
            /** Workflow Id */
            workflow_id: string;
            /** Workflow Name */
            workflow_name: string;
            /** Percentage */
            percentage: number;
            /** Change */
            change: number;
            /** Rank */
            rank: number;
        };
        /**
         * ToolResources
         * @description A set of resources that are used by the assistant's tools.
         *
         *     The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
         */
        "openai__types__beta__assistant__ToolResources-Input": {
            code_interpreter?: components["schemas"]["openai__types__beta__assistant__ToolResourcesCodeInterpreter"] | null;
            file_search?: components["schemas"]["openai__types__beta__assistant__ToolResourcesFileSearch"] | null;
        } & {
            [key: string]: unknown;
        };
        /** ToolResourcesCodeInterpreter */
        openai__types__beta__assistant__ToolResourcesCodeInterpreter: {
            /** File Ids */
            file_ids?: string[] | null;
        } & {
            [key: string]: unknown;
        };
        /** ToolResourcesFileSearch */
        openai__types__beta__assistant__ToolResourcesFileSearch: {
            /** Vector Store Ids */
            vector_store_ids?: string[] | null;
        } & {
            [key: string]: unknown;
        };
        /**
         * ToolResources
         * @description A set of resources that are used by the assistant's tools.
         *
         *     The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
         */
        openai__types__beta__assistant_create_params__ToolResources: {
            code_interpreter?: components["schemas"]["openai__types__beta__assistant_create_params__ToolResourcesCodeInterpreter"];
            file_search?: components["schemas"]["openai__types__beta__assistant_create_params__ToolResourcesFileSearch"];
        };
        /** ToolResourcesCodeInterpreter */
        openai__types__beta__assistant_create_params__ToolResourcesCodeInterpreter: {
            /** File Ids */
            file_ids?: string[];
        };
        /** ToolResourcesFileSearch */
        openai__types__beta__assistant_create_params__ToolResourcesFileSearch: {
            /** Vector Store Ids */
            vector_store_ids?: string[];
            /** Vector Stores */
            vector_stores?: components["schemas"]["ToolResourcesFileSearchVectorStore"][];
        };
        /**
         * FileSearch
         * @description Overrides for the file search tool.
         */
        "openai__types__beta__file_search_tool__FileSearch-Input": {
            /** Max Num Results */
            max_num_results?: number | null;
            ranking_options?: components["schemas"]["openai__types__beta__file_search_tool__FileSearchRankingOptions"] | null;
        } & {
            [key: string]: unknown;
        };
        /**
         * FileSearchRankingOptions
         * @description The ranking options for the file search.
         *
         *     If not specified, the file search tool will use the `auto` ranker and a score_threshold of 0.
         *
         *     See the [file search tool documentation](https://platform.openai.com/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.
         */
        openai__types__beta__file_search_tool__FileSearchRankingOptions: {
            /** Score Threshold */
            score_threshold: number;
            /** Ranker */
            ranker?: ("auto" | "default_2024_08_21") | null;
        } & {
            [key: string]: unknown;
        };
        /**
         * FileSearch
         * @description Overrides for the file search tool.
         */
        openai__types__beta__file_search_tool_param__FileSearch: {
            /** Max Num Results */
            max_num_results?: number;
            ranking_options?: components["schemas"]["openai__types__beta__file_search_tool_param__FileSearchRankingOptions"];
        };
        /**
         * FileSearchRankingOptions
         * @description The ranking options for the file search.
         *
         *     If not specified, the file search tool will use the `auto` ranker and a score_threshold of 0.
         *
         *     See the [file search tool documentation](https://platform.openai.com/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.
         */
        openai__types__beta__file_search_tool_param__FileSearchRankingOptions: {
            /** Score Threshold */
            score_threshold: number;
            /**
             * Ranker
             * @enum {string}
             */
            ranker?: "auto" | "default_2024_08_21";
        };
        /**
         * Custom
         * @description The custom tool that the model called.
         */
        openai__types__chat__chat_completion_message_custom_tool_call_param__Custom: {
            /** Input */
            input: string;
            /** Name */
            name: string;
        };
        /**
         * Function
         * @description The function that the model called.
         */
        openai__types__chat__chat_completion_message_function_tool_call_param__Function: {
            /** Arguments */
            arguments: string;
            /** Name */
            name: string;
        };
        /** Custom */
        openai__types__chat__chat_completion_named_tool_choice_custom_param__Custom: {
            /** Name */
            name: string;
        };
        /** Function */
        openai__types__chat__chat_completion_named_tool_choice_param__Function: {
            /** Name */
            name: string;
        };
        /** FunctionDefinition */
        openai__types__shared__function_definition__FunctionDefinition: {
            /** Name */
            name: string;
            /** Description */
            description?: string | null;
            /** Parameters */
            parameters?: {
                [key: string]: unknown;
            } | null;
            /** Strict */
            strict?: boolean | null;
        } & {
            [key: string]: unknown;
        };
        /** FunctionDefinition */
        openai__types__shared_params__function_definition__FunctionDefinition: {
            /** Name */
            name: string;
            /** Description */
            description?: string;
            /** Parameters */
            parameters?: {
                [key: string]: unknown;
            };
            /** Strict */
            strict?: boolean | null;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export interface operations {
    hello_v1_hello__get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    return_user_and_session_v1_auth__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": components["schemas"]["Body_return_user_and_session_v1_auth__post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    return_token_v1_auth_token_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": components["schemas"]["Body_return_token_v1_auth_token_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BearerAccessToken"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    test_auth_access_token_v1_auth_token_test_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
        };
    };
    test_auth_creds_v1_auth_creds_test_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
        };
    };
    reset_password_email_v1_auth_password_reset_post: {
        parameters: {
            query: {
                email: string;
                redirect_to?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    refresh_password_email_v1_auth_session_refresh_post: {
        parameters: {
            query: {
                refresh_token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_user_v1_auth_user_put: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserAttributes"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    confirm_user_v1_auth_confirm_get: {
        parameters: {
            query: {
                token_hash: string;
                type: string;
                next?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_types_v1_app_creds_types_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
        };
    };
    get_creds_types_v1_app_creds_types__app__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                app: components["schemas"]["AppTypes"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_app_creds_v1_app_creds__get: {
        parameters: {
            query?: {
                id?: string;
                app?: components["schemas"]["AppTypes"];
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppCredsLiteDocPage"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_app_creds_v1_app_creds__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AppCredsCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppCredsDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_app_creds_v1_app_creds__id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppCredsDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_app_creds_v1_app_creds__id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AppCredsUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppCredsDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_app_creds_v1_app_creds__id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AppCredsRead"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Deleted"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_app_auth_v1_app_auth__get: {
        parameters: {
            query?: {
                id?: string;
                app?: components["schemas"]["AppTypes"];
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppAuthLiteDocPage"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    sync_app_auth_v1_app_auth_sync_get: {
        parameters: {
            query: {
                app: components["schemas"]["AppTypes"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: string;
                    };
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_app_auth_v1_app_auth__id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AppAuthRead"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Deleted"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    refresh_app_auth_v1_app_auth__app_name__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                app_name: components["schemas"]["AppTypes"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    oauth_url_v1_auth_intuit_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    oauth_redirect_v1_auth_intuit_oauth_callback_get: {
        parameters: {
            query: {
                code: string;
                state: string;
                realm_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    google_oauth_url_v1_auth_google_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UrlObj"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    google_callback_v1_auth_google_oauth_callback_get: {
        parameters: {
            query?: {
                code?: string | null;
                state?: string | null;
                error?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    looker_client_credentials_v1_auth_looker_client_credentials_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LookerClientCredentialsRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    salesforce_oauth_url_v1_auth_salesforce_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UrlObj"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    salesforce_callback_v1_auth_salesforce_oauth_callback_get: {
        parameters: {
            query?: {
                code?: string | null;
                state?: string | null;
                error?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    outlook_oauth_url_v1_auth_outlook_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UrlObj"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    outlook_callback_v1_auth_outlook_oauth_callback_get: {
        parameters: {
            query?: {
                code?: string | null;
                state?: string | null;
                error?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    box_oauth_url_v1_auth_box_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UrlObj"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    box_callback_v1_auth_box_oauth_callback_get: {
        parameters: {
            query?: {
                code?: string | null;
                state?: string | null;
                error?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    slack_oauth_url_v1_auth_slack_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UrlObj"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    slack_oauth_callback_v1_auth_slack_oauth_callback_get: {
        parameters: {
            query?: {
                code?: string | null;
                state?: string | null;
                error?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    whatsapp_oauth_url_v1_auth_whatsapp_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UrlObj"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    whatsapp_oauth_callback_v1_auth_whatsapp_oauth_callback_get: {
        parameters: {
            query?: {
                code?: string | null;
                state?: string | null;
                error?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    zoom_oauth_url_v1_auth_zoom_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UrlObj"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    zoom_oauth_callback_v1_auth_zoom_oauth_callback_get: {
        parameters: {
            query?: {
                code?: string | null;
                state?: string | null;
                error?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    dropbox_oauth_url_v1_auth_dropbox_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UrlObj"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    dropbox_callback_v1_auth_dropbox_oauth_callback_get: {
        parameters: {
            query?: {
                code?: string | null;
                state?: string | null;
                error?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_action_types_v1_actions_types_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
        };
    };
    get_action_type_objects_v1_actions_types__action_type__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                action_type: components["schemas"]["ActionType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_action_tools_v1_actions_tools_get: {
        parameters: {
            query?: {
                llm_type?: "" | "openai_chat" | "openai_responses" | "openai_assistant" | "gemini" | "claude" | "grok";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_mcp_action_tools_v1_actions_mcp_tools_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
        };
    };
    list_actions_v1_actions__get: {
        parameters: {
            query?: {
                id?: string;
                name?: string;
                version?: number;
                type?: components["schemas"]["ActionType"];
                is_saved?: boolean;
                is_published?: boolean;
                is_shared?: boolean;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDocsFound"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_action_v1_actions__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActionCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_system_actions_v1_actions_system_actions__get: {
        parameters: {
            query?: {
                id?: string;
                name?: string;
                version?: number;
                type?: components["schemas"]["ActionType"];
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDocsFound"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_action_v1_actions__id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_action_v1_actions__id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActionUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_action_v1_actions__id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    search_actions_v1_actions_search_text_get: {
        parameters: {
            query: {
                query: string;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDocsFound"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    run_action_v1_actions__id__run_post: {
        parameters: {
            query?: {
                action_result_id?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    run_action_stream_v1_actions__id__run_stream_post: {
        parameters: {
            query?: {
                action_result_id?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    async_run_action_v1_actions__id__async_run_post: {
        parameters: {
            query?: {
                action_result_id?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Body_async_run_action_v1_actions__id__async_run_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionResultDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    async_run_action_loop_v1_actions__id__async_run_loop_post: {
        parameters: {
            query?: {
                action_result_id?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Body_async_run_action_loop_v1_actions__id__async_run_loop_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionResultDoc"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    async_run_action_doc_v1_actions_async_run_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Body_async_run_action_doc_v1_actions_async_run_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionResultDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    batch_run_action_v1_actions__id__batch_run_post: {
        parameters: {
            query?: {
                action_result_id?: string;
                batch_size?: number | null;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Body_batch_run_action_v1_actions__id__batch_run_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionResultDoc"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    clone_action_v1_actions_clone_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CloneActionRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: components["schemas"]["CloneActionResult"][];
                    };
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_action_multimodal_assistant_openai_v1_action_types_multimodal_assistant_openai_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActionCreateMultimodalAssistantOpenai"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_action_text2text_llm_chat_openai_v1_action_types_text2text_llm_chat_openai_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActionCreateText2TextLlmChatOpenai"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_action_text2text_read_url_v1_action_types_text2text_read_url_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActionCreateText2TextReadUrl"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_action_text2text_search_web_v1_action_types_text2text_search_web_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActionCreateText2TextSearchWeb"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_action_text2text_user_input_v1_action_types_text2text_user_input_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActionCreateText2TextUserInput"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_text2img_dalle_openai_v1_action_types_text2img_dalle_openai_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DalleOpenaiConfig"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    run_text2img_dalle_openai_v1_action_types_text2img_dalle_openai__action_id__run_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                action_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DataBlock-Input"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataBlocks-Output"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_img2img_edit_openai_v1_action_types_img2img_edit_openai_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActionCreateImg2ImgEditOpenai"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_img2img_edit_openai_v1_action_types_img2img_variation_openai_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActionCreateImg2ImgVariationOpenai"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_action_text2audio_speech_openai_v1_action_types_text2audio_speech_openai_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActionCreateText2AudioSpeechOpenai"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_action_audio2text_transcription_openai_v1_action_types_audio2text_transcription_openai_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActionCreateAudio2TextTranscriptionOpenai"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_action_audio2text_translation_openai_v1_action_types_audio2text_translation_openai_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActionCreateAudio2TextTranslationOpenai"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_action_result_v1_action_results__get: {
        parameters: {
            query?: {
                id?: string;
                status?: components["schemas"]["EventResultStatus"];
                is_saved?: boolean;
                action_id?: string;
                action_name?: string;
                action_version?: number;
                action_type?: components["schemas"]["ActionType"];
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionResultDocsFound"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_action_result_v1_action_results__put: {
        parameters: {
            query: {
                id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActionResultUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionResultDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_action_result_v1_action_results__id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionResultDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_action_result_v1_action_results__id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionResultDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    search_action_results_v1_action_results_search_text_get: {
        parameters: {
            query: {
                query: string;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionResultDocsFound"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_characters_v1_characters__get: {
        parameters: {
            query?: {
                id?: string;
                name?: string;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CharacterLiteDocPage"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_character_v1_characters__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CharacterCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CharacterDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_character_v1_characters__id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CharacterDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_character_v1_characters__id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CharacterUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CharacterDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_character_v1_characters__id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CharacterDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_prompts_v1_prompts__get: {
        parameters: {
            query?: {
                id?: string;
                name?: string;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptLiteDocPage"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_prompt_v1_prompts__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PromptCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_prompt_v1_prompts__id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_prompt_v1_prompts__id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PromptUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_prompt_v1_prompts__id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_teams_v1_teams__get: {
        parameters: {
            query?: {
                id?: string;
                name?: string;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TeamLiteDocPage"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_team_v1_teams__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TeamCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TeamDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_team_v1_teams__id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TeamDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_team_v1_teams__id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TeamUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TeamDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_team_v1_teams__id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TeamDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_chat_v1_action_chats__get: {
        parameters: {
            query?: {
                id?: string;
                title?: string;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatDoc"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_chat_v1_action_chats__post: {
        parameters: {
            query: {
                action_id: string;
                openai_provider: "openai" | "azure";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_chat_v1_action_chats__id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_chat_v1_action_chats__id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ChatUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    chat_v1_action_chats__id__post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DataBlock-Input"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_chat_v1_action_chats__id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_mcps_v1_mcps__get: {
        parameters: {
            query?: {
                server_name?: string;
                server_type?: "SSE" | "StreamableHttp";
                server_url?: string;
                description?: string;
                oauth_token?: string;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    [key: string]: string;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MCPDocsFound"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_mcp_v1_mcps__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MCPCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MCPDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_mcp_v1_mcps__mcp_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                mcp_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MCPDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_mcp_v1_mcps__mcp_id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                mcp_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MCPUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MCPDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_mcp_v1_mcps__mcp_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                mcp_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MCPDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_mcp_by_server_name_v1_mcps_by_name__mcp_server_name__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                mcp_server_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MCPDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_action_graphs_v1_action_graphs__get: {
        parameters: {
            query?: {
                id?: string;
                name?: string;
                version?: number;
                is_saved?: boolean;
                is_published?: boolean;
                is_published_by_others?: boolean;
                is_shared?: boolean;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionGraphDocsFound"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_action_graph_v1_action_graphs__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActionGraphCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionGraphDoc-Output"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_action_graph_v1_action_graphs__id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionGraphDoc-Output"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_action_graph_v1_action_graphs__id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActionGraphUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionGraphDoc-Output"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_action_graph_v1_action_graphs__id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionGraphDoc-Output"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    search_action_graphs_v1_action_graphs_search_text_get: {
        parameters: {
            query: {
                query: string;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionGraphDocsFound"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    async_run_action_graph_v1_action_graphs__id__async_run_post: {
        parameters: {
            query?: {
                action_graph_result_id?: string | null;
                action_graph_node_id?: string | null;
                is_rerun_graph?: boolean;
                is_empty_downstream_only?: boolean;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Body_async_run_action_graph_v1_action_graphs__id__async_run_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionGraphResultDoc"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    batch_run_action_graph_v1_action_graphs__id__batch_run_post: {
        parameters: {
            query?: {
                action_graph_result_id?: string | null;
                action_graph_node_id?: string | null;
                is_rerun_graph?: boolean;
                is_empty_downstream_only?: boolean;
                batch_size?: number | null;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Body_batch_run_action_graph_v1_action_graphs__id__batch_run_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionGraphResultDoc"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    run_group_chat_v1_action_graphs__action_graph_id__run_group_chat_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                action_graph_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DataBlock-Input"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionGraphResultDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_action_graph_result_v1_action_graphs_results__get: {
        parameters: {
            query?: {
                id?: string;
                status?: components["schemas"]["EventResultStatus"];
                is_saved?: boolean;
                action_graph_id?: string;
                action_graph_name?: string;
                action_graph_version?: number;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionGraphResultDocsFound"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_action_graph_result_v1_action_graphs_results__put: {
        parameters: {
            query: {
                id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActionGraphResultUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionGraphResultDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_action_graph_result_v1_action_graphs_results__id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionGraphResultDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_action_graph_result_v1_action_graphs_results__id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionGraphResultDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    search_action_graph_results_v1_action_graphs_results_search_text_get: {
        parameters: {
            query: {
                query: string;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionGraphResultDocsFound"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_event_result_v1_event_results__id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_schedules_v1_schedules__get: {
        parameters: {
            query?: {
                id?: string;
                name?: string;
                runnable_id?: string;
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScheduleDoc"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_schedule_v1_schedules__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ScheduleCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScheduleDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_schedule_v1_schedules__id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScheduleDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_schedule_v1_schedules__id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ScheduleUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScheduleDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_schedule_v1_schedules__id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ScheduleDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_files_v1_files__get: {
        parameters: {
            query?: {
                filename?: string | null;
                is_public?: boolean | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FileMeta"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    upload_files_v1_files__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["Body_upload_files_v1_files__post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FileMeta"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_files_v1_files__delete: {
        parameters: {
            query?: {
                is_public?: boolean | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": string[];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    upload_public_files_v1_files_public__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["Body_upload_public_files_v1_files_public__post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FileMeta"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    process_files_v1_files_process_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FilesAndProcessingParams"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_files_s3_async_v1_files_s3_files_get: {
        parameters: {
            query: {
                object_prefix: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    ingest_file_async_v1_ingestion_file_async_post: {
        parameters: {
            query?: {
                /** @description Optional knowledge base ID. If omitted, uses the caller's personal knowledge base. */
                kb_id?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["Body_ingest_file_async_v1_ingestion_file_async_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IngestAsyncResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_ingested_files_proxy_v1_ingestion_files_get: {
        parameters: {
            query?: {
                /** @description Search filename. */
                filename_contains?: string | null;
                /** @description Filter by status. */
                status?: string | null;
                weaviate_status?: string | null;
                graphrag_status?: string | null;
                start_date?: string | null;
                end_date?: string | null;
                sort_by?: "created_at" | "updated_at" | "status" | "original_filename";
                sort_order?: "asc" | "desc";
                limit?: number;
                offset?: number;
                /** @description Optional KB filter. If provided, lists files for that KB. */
                kb_id?: string | null;
                /** @description Optional KB name filter. Server resolves to kb_id if unique. */
                kb_name?: string | null;
                /** @description Filter scope: 'personal', 'kb', 'all'. Default: 'all' (My Uploads). */
                scope?: ("personal" | "kb" | "all") | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FileListResponseSchema"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_kbs_proxy_v1_ingestion_kb__get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeBaseResponse"][];
                };
            };
        };
    };
    create_kb_proxy_v1_ingestion_kb__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["KnowledgeBaseCreateRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeBaseResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_kb_proxy_v1_ingestion_kb__kb_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kb_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeBaseResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_kb_proxy_v1_ingestion_kb__kb_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kb_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_kb_proxy_v1_ingestion_kb__kb_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kb_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["KnowledgeBaseUpdateRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeBaseResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_kb_members_proxy_v1_ingestion_kb__kb_id__members_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kb_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeBaseMembershipResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    add_kb_member_proxy_v1_ingestion_kb__kb_id__members_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kb_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["KnowledgeBaseMemberCreateRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeBaseMembershipResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    add_kb_member_by_email_proxy_v1_ingestion_kb__kb_id__members_by_email_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kb_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["KnowledgeBaseMemberByEmailRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeBaseMembershipResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    add_kb_members_bulk_by_email_proxy_v1_ingestion_kb__kb_id__members_bulk_by_email_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kb_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["KnowledgeBaseMembersBulkRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BulkMemberResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    remove_kb_member_proxy_v1_ingestion_kb__kb_id__members__member_user_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kb_id: string;
                member_user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_kb_member_proxy_v1_ingestion_kb__kb_id__members__member_user_id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                kb_id: string;
                member_user_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["KnowledgeBaseMemberUpdateRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeBaseMembershipResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_datastore_v1_vectorstore__get: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DatastoreMetaDoc"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_datastore_v1_vectorstore__post: {
        parameters: {
            query: {
                name: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DatastoreMetaDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_datastore_v1_vectorstore__name__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DatastoreMetaDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    search_v1_vectorstore__id__search_post: {
        parameters: {
            query: {
                datastore_id: string;
                top_k?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TextObj"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SearchResult"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_datastore_v1_vectorstore__id__delete: {
        parameters: {
            query: {
                datastore_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DatastoreMetaDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_datastore_put_result_v1_vectorstore_result__datastore_put_result_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                datastore_put_result_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    v2_list_collections_v1_vectorstore_v2_collections__get: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DatastoreMetaDoc"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    v2_create_collection_v1_vectorstore_v2_collections__post: {
        parameters: {
            query: {
                name: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DatastoreMetaDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    v2_ingest_file_into_collection_v1_vectorstore_v2_collections__collection_name__files_async_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                collection_name: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["Body_v2_ingest_file_into_collection_v1_vectorstore_v2_collections__collection_name__files_async_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    v2_search_collection_v1_vectorstore_v2_collections__collection_name__search_post: {
        parameters: {
            query?: {
                top_k?: number;
            };
            header?: never;
            path: {
                collection_name: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TextObj"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SearchResult"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    v2_delete_collection_v1_vectorstore_v2_collections__collection_name__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                collection_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_file_info_v1_openai_storage_files__get: {
        parameters: {
            query: {
                openai_provider: "openai" | "azure";
                file_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FileObject"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    upload_file_v1_openai_storage_files__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["Body_upload_file_v1_openai_storage_files__post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FileObject"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_file_v1_openai_storage_files__delete: {
        parameters: {
            query: {
                openai_provider: "openai" | "azure";
                file_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FileDeleted"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    upload_file_on_azure_v1_openai_storage_files_azure_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["Body_upload_file_on_azure_v1_openai_storage_files_azure_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FileObject"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    upload_file_on_openai_v1_openai_storage_files_openai_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["Body_upload_file_on_openai_v1_openai_storage_files_openai_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FileObject"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_files_info_v1_openai_storage_files_list_get: {
        parameters: {
            query: {
                openai_provider: "openai" | "azure";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FileObject"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_file_v1_openai_storage_files_content_get: {
        parameters: {
            query: {
                openai_provider: "openai" | "azure";
                file_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_vector_store_v1_openai_storage_vector_stores__get: {
        parameters: {
            query: {
                openai_provider: "openai" | "azure";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RetrieveVectorStore"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStore"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_vector_store_v1_openai_storage_vector_stores__put: {
        parameters: {
            query: {
                openai_provider: "openai" | "azure";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateVectorStore"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStore"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_vector_store_v1_openai_storage_vector_stores__post: {
        parameters: {
            query: {
                openai_provider: "openai" | "azure";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateVectorStore"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStore"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_vector_store_v1_openai_storage_vector_stores__delete: {
        parameters: {
            query: {
                openai_provider: "openai" | "azure";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeleteVectorStore"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStoreDeleted"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_vector_stores_v1_openai_storage_vector_stores_list_get: {
        parameters: {
            query: {
                openai_provider: "openai" | "azure";
                limit?: number;
                order?: "desc" | "asc";
                after?: string | null;
                before?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStore"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_vector_store_files_v1_openai_storage_vector_store_file_batches__get: {
        parameters: {
            query: {
                openai_provider: "openai" | "azure";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RetrieveVectorStoreFileBatch"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStoreFileBatch"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_vector_store_files_v1_openai_storage_vector_store_file_batches__post: {
        parameters: {
            query: {
                openai_provider: "openai" | "azure";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateVectorStoreFileBatch"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStoreFileBatch"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_vector_store_files_v1_openai_storage_vector_store_file_batches__delete: {
        parameters: {
            query: {
                openai_provider: "openai" | "azure";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeleteVectorStoreFile"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStoreFileDeleted"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_vector_store_files_v1_openai_storage_vector_store_file_batches_list_get: {
        parameters: {
            query: {
                openai_provider: "openai" | "azure";
                vector_store_id: string;
                batch_id: string;
                limit?: number | null;
                order?: ("desc" | "asc") | null;
                after?: string | null;
                before?: string | null;
                filter?: ("in_progress" | "completed" | "failed" | "cancelled") | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStoreFile"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_vector_store_files_v1_openai_storage_vector_store_files__post: {
        parameters: {
            query: {
                openai_provider: "openai" | "azure";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateVectorStoreFile"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStoreFile"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_vector_store_files_v1_openai_storage_vector_store_files_list_get: {
        parameters: {
            query: {
                openai_provider: "openai" | "azure";
                vector_store_id: string;
                limit?: number | null;
                order?: ("desc" | "asc") | null;
                after?: string | null;
                before?: string | null;
                filter?: ("in_progress" | "completed" | "failed" | "cancelled") | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStoreFile"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    run_react_agent_v1_agents_react_post: {
        parameters: {
            query: {
                openai_provider: "openai" | "azure";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TextObj"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown[];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    run_act_agent_v1_agents_act_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AgentData-Input"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AgentData-Output"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    zendesk_webhook_v1_webhooks_zendesk_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_webhook_v1_webhooks__get: {
        parameters: {
            query?: {
                webhook_id?: string | null;
                runnable_id?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DocFindPage"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_webhook_v1_webhooks__put: {
        parameters: {
            query: {
                id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WebhookUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_webhook_v1_webhooks__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WebhookCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_webhook_v1_webhooks__id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_webhook_v1_webhooks__id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": number;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    run_webhook_event_v1_webhooks_event__id__post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionGraphResultDoc"][] | components["schemas"]["ActionResultDoc"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    slack_events_v1_webhooks_slack_events_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    run_slack_cmd_v1_webhooks_slack_command_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": components["schemas"]["Body_run_slack_cmd_v1_webhooks_slack_command_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    siri_automation_command_v1_webhooks_siri_shortcuts_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SiriAutomationPayload"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    stream_sse_v1_server_sent_events_stream__topic__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                topic: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    streaming_ndjson_v1_server_sent_events_streaming__topic__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                topic: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    trigger_v1_server_sent_events_test_trigger__topic__post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                topic: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    read_v1_share__get: {
        parameters: {
            query?: {
                id?: string;
                data_id?: string;
                runnable_type?: components["schemas"]["RunnableType"];
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ShareDataDocsPage"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_v1_share__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ShareDataCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ShareDataDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_v1_share__id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ShareDataDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_v1_share__id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ShareDataUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ShareDataDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_v1_share__id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": number;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    clone_v1_share__id__clone_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ActionDoc"] | components["schemas"]["ActionGraphDoc-Output"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_all_cost_configs_v1_dashboard_cost_config__get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CostConfigListResponse"];
                };
            };
        };
    };
    create_cost_config_v1_dashboard_cost_config__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CostConfigCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CostConfigResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_cost_config_v1_dashboard_cost_config__config_type__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                config_type: components["schemas"]["CostConfigType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CostConfigResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_cost_config_v1_dashboard_cost_config__config_type__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                config_type: components["schemas"]["CostConfigType"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CostConfigUpdate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CostConfigResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_cost_config_v1_dashboard_cost_config__config_type__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                config_type: components["schemas"]["CostConfigType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    upsert_cost_config_v1_dashboard_cost_config_upsert_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CostConfigCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CostConfigResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    initialize_default_configs_v1_dashboard_cost_config_initialize_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    get_dashboard_v1_dashboard__get: {
        parameters: {
            query?: {
                /** @description Time range for dashboard data */
                time_range?: components["schemas"]["TimeRange"];
                /** @description Filter dashboard data by */
                filter_by?: components["schemas"]["FilterBy"] | null;
                /** @description Value to filter by */
                filter_value?: string | null;
                /** @description Force refresh cache */
                force_refresh?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DashboardResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_dashboard_with_custom_filters_v1_dashboard__post: {
        parameters: {
            query?: {
                /** @description Force refresh cache */
                force_refresh?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DashboardRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DashboardResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_metric_history_v1_dashboard_metrics__metric_type__history_get: {
        parameters: {
            query?: {
                /** @description Time range for historical data */
                time_range?: components["schemas"]["TimeRange"];
                /** @description Data granularity: daily, weekly, monthly */
                granularity?: string;
                /** @description Force refresh cache */
                force_refresh?: boolean;
            };
            header?: never;
            path: {
                metric_type: components["schemas"]["MetricType"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MetricHistoryResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_agent_performance_v1_dashboard_agents_performance_get: {
        parameters: {
            query?: {
                /** @description Time range for performance data */
                time_range?: components["schemas"]["TimeRange"];
                /** @description Number of top agents to return */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AgentPerformance"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_workflow_performance_v1_dashboard_workflows_performance_get: {
        parameters: {
            query?: {
                /** @description Time range for performance data */
                time_range?: components["schemas"]["TimeRange"];
                /** @description Number of top workflows to return */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkflowPerformance"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_department_metrics_v1_dashboard_departments_metrics_get: {
        parameters: {
            query?: {
                /** @description Time range for department metrics */
                time_range?: components["schemas"]["TimeRange"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DepartmentMetrics"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_dashboard_summary_v1_dashboard_summary_get: {
        parameters: {
            query?: {
                /** @description Time range for summary data */
                time_range?: components["schemas"]["TimeRange"];
                /** @description Force refresh cache */
                force_refresh?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    refresh_dashboard_cache_v1_dashboard_cache_refresh_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    clear_dashboard_cache_v1_dashboard_cache_delete: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    cleanup_expired_cache_v1_dashboard_cache_cleanup_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    dashboard_health_check_v1_dashboard_health_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    google_ads_oauth_url_v1_auth_google_ads_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UrlObj"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    google_ads_callback_v1_auth_google_ads_oauth_callback_get: {
        parameters: {
            query?: {
                code?: string | null;
                state?: string | null;
                error?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    meta_oauth_url_v1_auth_meta_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UrlObj"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    meta_callback_v1_auth_meta_oauth_callback_get: {
        parameters: {
            query?: {
                code?: string | null;
                state?: string | null;
                error?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    hubspot_oauth_url_v1_auth_hubspot_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UrlResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    hubspot_callback_v1_auth_hubspot_oauth_callback_get: {
        parameters: {
            query?: {
                code?: string | null;
                state?: string | null;
                error?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    github_oauth_url_v1_auth_github_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UrlResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    github_callback_v1_auth_github_oauth_callback_get: {
        parameters: {
            query?: {
                code?: string | null;
                state?: string | null;
                error?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_db_auths_v1_db_auth__get: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DbAuthLiteDocPage"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_db_auth_v1_db_auth__post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DatabaseCredsModel"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DbAuthDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_db_connections_v1_db_auth_connections_get: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DatabaseConnection"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_db_auth_v1_db_auth__db_auth_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                db_auth_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DbAuthDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_db_auth_v1_db_auth__db_auth_id__put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                db_auth_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DatabaseCredsModel"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DbAuthDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_db_auth_v1_db_auth__db_auth_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                db_auth_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Deleted"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_db_auth_by_name_v1_db_auth_by_name__connection_name__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                connection_name: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DbAuthDoc"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    test_db_connection_v1_db_auth_test_connection__db_auth_id__post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                db_auth_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    adp_client_credentials_v1_auth_adp_client_credentials_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ADPClientCredentialsRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    asana_oauth_url_v1_auth_asana_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UrlResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    asana_callback_v1_auth_asana_oauth_callback_get: {
        parameters: {
            query?: {
                code?: string | null;
                state?: string | null;
                error?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    spotify_client_credentials_v1_auth_spotify_client_credentials_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SpotifyClientCredentialsRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    netsuite_tba_auth_v1_auth_netsuite_tba_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NetSuiteTBARequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    ukg_oauth_url_v1_auth_ukg_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UrlObj"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    ukg_oauth_callback_v1_auth_ukg_oauth_callback_get: {
        parameters: {
            query?: {
                code?: string | null;
                state?: string | null;
                error?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    icims_oauth_url_v1_auth_icims_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UrlObj"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    icims_oauth_callback_v1_auth_icims_oauth_callback_get: {
        parameters: {
            query?: {
                code?: string | null;
                state?: string | null;
                error?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    workday_oauth_url_v1_auth_workday_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UrlObj"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    workday_oauth_callback_v1_auth_workday_oauth_callback_get: {
        parameters: {
            query?: {
                code?: string | null;
                state?: string | null;
                error?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    datev_oauth_url_v1_auth_datev_oauth_url_get: {
        parameters: {
            query?: {
                redirect_uri?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UrlObj"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    datev_oauth_callback_v1_auth_datev_oauth_callback_get: {
        parameters: {
            query?: {
                code?: string | null;
                state?: string | null;
                error?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    terminal_status_v1_terminal_status_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    open_api_json_v1_openapi_json_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    api_docs_v1_docs_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    api_redoc_v1_redoc_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
}
