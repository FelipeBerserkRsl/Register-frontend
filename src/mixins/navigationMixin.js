import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['setPage']), // Import the mutation
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    },
    updatePageAndNavigate(page, routeName) {
      this.setPage(page); // Commit the mutation
      this.navigateTo(routeName); // Navigate to the route
    },
  },
};