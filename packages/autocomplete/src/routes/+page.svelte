<script>
  import SvelAutoComplete from '$lib/index.js';

  let value = '';
  const restaurants = [];
  const querySearch = (queryString, cb) => {
    const results = queryString
      ? restaurants.value.filter(createFilter(queryString))
      : restaurants.value;
    // call callback function to return suggestions
    cb(results);
  };
  const createFilter = (queryString) => {
    return (restaurant) => {
      return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
    };
  };
  const loadAll = () => {
    return [
      { value: 'vue', link: 'https://github.com/vuejs/vue' },
      { value: 'element', link: 'https://github.com/ElemeFE/element' },
      { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
      { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
      { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
      { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
      { value: 'babel', link: 'https://github.com/babel/babel' },
    ];
  };
</script>

<SvelAutoComplete fetchSuggestions={querySearch} />
