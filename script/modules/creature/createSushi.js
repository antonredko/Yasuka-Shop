import {connect} from '../connectionJSON.js';
import {MAIN_FILTERS, FILTERS, createFilters} from '../createFilters.js';
import {MAIN_PROD, PROD, createProducts} from '../createProductsList.js';

const URL = '../../../data/sushi.json';
connect(URL, createFilters, createProducts);
