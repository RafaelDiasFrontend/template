import { createVuetify } from "vuetify";
const defaultTheme = "light";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // your config will come here
    theme: {
      defaultTheme: defaultTheme,
      themes: {
        light: {
          colors: {
            primary: "#111111",
            secondary: "#03DAC6",
            error: "#B00020",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FB8C00",
          },
        },
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
