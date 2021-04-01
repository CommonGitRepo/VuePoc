import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        emailAddress:'Email Address',
        password:'Password'
    },
    'es': {
        emailAddress:'Dirección de correo electrónico',
        password:'Contraseña'
    },
    'hi':{
        emailAddress:'मेल पता',
        password:'कुंजिका'
    }

};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;