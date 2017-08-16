import { mapMutations } from 'vuex';

const AppMixin = {
  name: 'app',

  i18n: {
    messages: {
      en: {
        home: 'Home',
        register: 'Register',
        login: 'Login',
        shop: 'Shop',
        basket: 'Basket',
        products: 'Manage products',
        cancelText: 'Cancel',

      },
      de: {
        home: 'Startseite',
        register: 'Registrierung',
        login: 'Login',
        shop: 'Shop',
        basket: 'Warenkorb',
        products: 'Produktverwaltung',
        cancelText: 'Abbrechen',
      },
    },
  },

  computed: {
    isUserAuthenticated: {
      get() {
        return this.$store.state.isUserAuthenticated;
      },
    },

    basket: {
      get() {
        return this.$store.state.Basket.basket;
      },
    },
  },

  methods: {
    ...mapMutations({
      setLocale: 'SET_LOCALE',
    }),
  },
};

export default AppMixin;
