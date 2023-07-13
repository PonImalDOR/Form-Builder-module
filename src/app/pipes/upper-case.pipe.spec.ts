import { UpperCasePipe } from './upper-case.pipe';

describe('UpperCasePipe', () => {
  let pipe: UpperCasePipe;
  beforeEach(() => {
    pipe = new UpperCasePipe()
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transform to uppercase', () => {
    expect(pipe.transform('testing pipe')).toBe('TESTING PIPE')
  })
});
