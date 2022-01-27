import {projects} from '../constants';

export const getNextIndex = (index: number) =>
  index + 1 > projects.length - 1 ? 0 : index + 1;
