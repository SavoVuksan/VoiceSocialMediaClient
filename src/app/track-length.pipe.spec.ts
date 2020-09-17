import { TrackLengthPipe } from './track-length.pipe';

describe('TrackLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new TrackLengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should convert duration in seconds to m:ss',()=>{
    const pipe = new TrackLengthPipe();
    let output;
    output = pipe.transform(0);
    expect(output).toBe('0:00');

    output = pipe.transform(61);
    expect(output).toBe('1:01');

    output = pipe.transform(0.49);
    expect(output).toBe('0:00');

    output = pipe.transform(90);
    expect(output).toBe('1:30');

    output = pipe.transform(120);
    expect(output).toBe('2:00');

    output = pipe.transform(119.9);
    expect(output).toBe('2:00');

    output = pipe.transform(0.5);
    expect(output).toBe('0:01');

    output = pipe.transform(0.49);
    expect(output).toBe('0:00');

    output = pipe.transform(600);
    expect(output).toBe('10:00');
  });

  it('should add a leading 0 to values less than 10',()=>{
    const pipe = new TrackLengthPipe();
    let output;

    output = pipe.format(0);
    expect(output).toBe('00');
    
    output = pipe.format(9);
    expect(output).toBe('09');

    output = pipe.format(10);
    expect(output).toBe('10');
    
    output = pipe.format(99);
    expect(output).toBe('99');
  });
});
