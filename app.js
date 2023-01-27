const app = Vue.createApp({
  data() {
    return {
      firstName: "Khayrul",
      lastName: "Islam",
      email: "coderkhayrul@mail.com",
      gender: "male",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const results = await res.json();
      //   console.log(results.results[0]);
      this.firstName = results.results[0].name.first;
      this.lastName = results.results[0].name.last;
      this.email = results.results[0].email;
      this.gender = results.results[0].gender;
      this.image = results.results[0].picture.large;
    },
  },
});

app.mount("#app");
