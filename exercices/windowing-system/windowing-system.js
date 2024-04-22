export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

export class ProgramWindow {
  constructor() {
    this.size = new Size();
    this.position = new Position();
    this.screenSize = new Size(800, 600);
  }

  resize(size) {
    this.size.width = size.width > 1 ? size.width : 1;
    this.size.height = size.height > 1 ? size.height : 1;

    if (!(this.screenSize.width - this.size.width >= this.position.x)) {
      this.size.width = this.screenSize.width - this.position.x;
    }

    if (!(this.screenSize.height - this.size.height >= this.position.y)) {
      this.size.height = this.screenSize.height - this.position.y;
    }
  }

  move(positions) {
    this.position.x = positions.x > 0 ? positions.x : 0;
    this.position.y = positions.y > 0 ? positions.y : 0;

    if (this.position.x > this.screenSize.width - this.size.width) {
      this.position.x = this.screenSize.width - this.size.width;
    }

    if (this.position.y > this.screenSize.height - this.size.height) {
      this.position.y = this.screenSize.height - this.size.height;
    }
  }
}

export function changeWindow(window) {
  window.size.width = 400;
  window.size.height = 300;

  window.position.x = 100;
  window.position.y = 150;

  return window;
}

Size.prototype.resize = function (width, height) {
  this.width = width;
  this.height = height;
};

Position.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};
