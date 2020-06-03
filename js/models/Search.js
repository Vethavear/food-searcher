import axios from 'axios';

export default class Search {

  constructor(query) {
    this.query = query;
  }
  async getResults() {

    const res = axios(`https://cors-anywhere.herokuapp.com/https://us.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=${this.query}&tagtype_1=nutrition_grades&tag_contains_1=contains&tag_1=A&additives=without&ingredients_from_palm_oil=without&json=true`);
    this.result = (await res).data.products;
  }

}