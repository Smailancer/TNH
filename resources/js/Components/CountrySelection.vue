<template>
    <div>
      <label for="country">Select your country:</label>
      <select id="country" v-model="selectedCountry">
        <option value="" disabled>Select your country</option>
        <option v-for="country in countries" :value="country.id">{{ country.name }}</option>
      </select>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        selectedCountry: null,
        countries: [],
      };
    },
    created() {
      // Fetch the list of countries from your Laravel backend using an API call or another method.
      // Update the 'countries' data property with the retrieved list.
    },
  };
  </script>
