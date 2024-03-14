module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        customText_blue: "#2E3952",
        customText_gray: "#414D67",
        custom_purple: "#7F57EA",
        custom_LightPurple: "#EAE4FB",
        custom_light: "#F8F6FE",
        custom_gradient_1: "#D370F5",
        custom_gradient_2: "#DEFDF7",
        custom_bg: "#F3F7FB",
        custom_bg_1: "#DDF3F7",
      },
      container: {
        padding: {
          DEFAULT: "20px",
          sm: "20px",
          md: "56px",
          lg: "56px",
          xl: "156px",
          "2xl": "156px",
        },
      },
    },
  },
  plugins: [],
};
