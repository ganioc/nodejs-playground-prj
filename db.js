
// const { DataStore } = require('notarealdb');
import {DataStore} from 'notarealdb';

const store = new DataStore('./data');

export default {
    students: store.collection('students'),
    colleges: store.collection('colleges')
}