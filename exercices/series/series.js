export class Series {
  constructor(series) {
    this.series = series;
  }

  slices(sliceLength) {
    validateSliceLength(sliceLength, this.series);

    let output = [];

    for (let i = 0; i < this.series.length - sliceLength + 1; i++) {
      output[i] = convertToDigitArray(this.series.slice(i, sliceLength + i));
    }

    return output;
  }
}

function convertToDigitArray(string) {
  return string.split('').map(Number);
}

function validateSliceLength(sliceLength, series) {
  if (sliceLength < 0) {
    throw new Error('slice length cannot be negative');
  }

  if (sliceLength === 0) {
    throw new Error('slice length cannot be zero');
  }

  if (series.length === 0) {
    throw new Error('series cannot be empty');
  }

  if (sliceLength > series.length) {
    throw new Error('slice length cannot be greater than series length');
  }
}
