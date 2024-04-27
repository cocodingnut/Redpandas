import { ShowFirstCharactersPipe } from './show-first-characters.pipe';

describe('ShowFirstCharactersPipe', () => {
  it('create an instance', () => {
    const pipe = new ShowFirstCharactersPipe();
    expect(pipe).toBeTruthy();
  });
});
