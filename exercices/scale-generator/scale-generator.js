export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
  }

  chromatic() {
    if (major.sharp.includes(this.tonic)) {
      const first_parte = sharps_scale.slice(
        sharps_scale.indexOf(this.tonic),
        sharps_scale.length
      );

      const second_parte = sharps_scale.slice(
        0,
        sharps_scale.indexOf(this.tonic)
      );

      return first_parte.concat(second_parte);
    }

    if (major.flat.includes(this.tonic)) {
      const first_parte = flats_scale.slice(
        flats_scale.indexOf(this.tonic),
        flats_scale.length
      );

      const second_parte = flats_scale.slice(
        0,
        flats_scale.indexOf(this.tonic)
      );

      return first_parte.concat(second_parte);
    }

    if (minor.flat.includes(this.tonic)) {
      let new_tonic;

      if (this.tonic.length > 1) {
        new_tonic = this.tonic[0].toUpperCase() + this.tonic[1];
      } else {
        new_tonic = this.tonic.toUpperCase();
      }

      const first_parte = flats_scale.slice(
        flats_scale.indexOf(new_tonic),
        flats_scale.length
      );

      const second_parte = flats_scale.slice(0, flats_scale.indexOf(new_tonic));

      return first_parte.concat(second_parte);
    }

    if (minor.sharp.includes(this.tonic)) {
      let new_tonic;

      if (this.tonic.length > 1) {
        new_tonic = this.tonic[0].toUpperCase() + this.tonic[1];
      } else {
        new_tonic = this.tonic.toUpperCase();
      }

      const first_parte = sharps_scale.slice(
        sharps_scale.indexOf(new_tonic),
        sharps_scale.length
      );

      const second_parte = sharps_scale.slice(
        0,
        sharps_scale.indexOf(new_tonic)
      );

      return first_parte.concat(second_parte);
    }
  }

  interval(intervals) {
    let scale;
    let output = [];

    scale = this.chromatic();

    let j = 0;
    output[0] = scale[0];

    for (let i = 0; i < intervals.length; i++) {
      if (intervals[i] == 'M') {
        j += 2;
      } else if (intervals[i] == 'm') {
        j += 1;
      } else if (intervals[i] == 'A') {
        j += 3;
      }

      if (j > scale.length - 1) {
        j -= scale.length;
      }

      output[i + 1] = scale[j];
    }

    return output;
  }
}

const major = {
  sharp: ['C', 'G', 'D', 'A', 'E', 'B', 'F#'],
  flat: ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb'],
};

const minor = {
  sharp: ['a', 'e', 'b', 'f#', 'c#', 'g#', 'd#'],
  flat: ['d', 'g', 'c', 'f', 'bb', 'eb'],
};

const sharps_scale = [
  'A',
  'A#',
  'B',
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
];

const flats_scale = [
  'A',
  'Bb',
  'B',
  'C',
  'Db',
  'D',
  'Eb',
  'E',
  'F',
  'Gb',
  'G',
  'Ab',
];
