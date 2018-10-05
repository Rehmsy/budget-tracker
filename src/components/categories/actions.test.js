import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from './reducers';
import { load, add, remove } from './actions';
import { getCategories, addCategory, removeCategory } from '../../services/budgetAPI';


jest.mock('../../services/budgetAPI', () => ({
  getCategories: jest.fn(),
  addCategory: jest.fn(),
  removeCategory: jest.fn()

}));

describe('budget actions', () => {

  it('loads categories', () => {
    const promise = Promise.resolve();
    getCategories.mockReturnValueOnce(promise);

    const { type, payload } = load();
    expect(type).toBe(CATEGORY_LOAD);
    expect(promise).toBe(payload);
    expect(getCategories.mock.calls.length).toBe(1); 
  });

  it('adds a category', () => {
    const myCategory = { 
      name: 'Pudding',
      budget: 600
    };
    const promise = Promise.resolve();
    addCategory.mockReturnValueOnce(promise);

    const { type, payload } = add(myCategory);
    expect(type).toBe(CATEGORY_ADD);
    expect(promise).toBe(payload);
    expect(addCategory.mock.calls.length).toBe(1);
    expect(addCategory.mock.calls[0][0]).toBe(myCategory);
  });

  it('removes category', () => {
    const promise = Promise.resolve();
    removeCategory.mockReturnValueOnce(promise);
    const key = 123;

    const { type, payload } = remove(key);
    expect(type).toBe(CATEGORY_REMOVE);
    expect(removeCategory.mock.calls.length).toBe(1);
    expect(removeCategory.mock.calls[0][0]).toBe(key);

    return payload.then(keyToDelete => {
      expect(keyToDelete).toBe(key);
    });
  });
});