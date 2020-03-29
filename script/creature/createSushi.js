import {connect} from '../connectionJSON.js';
import {createFilters} from '../createFilters.js';
import {createProducts} from '../createProductsList.js';

const URL = '../../../data/sushi.json';
connect(URL, createFilters, createProducts);
