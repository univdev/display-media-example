export class DisplayMediaHandler {
  stream?: MediaStream;

  constructor() {
    this.stream = undefined;
  }

  start(constraints?: MediaStreamConstraints): Promise<MediaStream> {
    return new Promise((resolve, reject) => {
      navigator.mediaDevices.getDisplayMedia(constraints).then((stream) => {
        this.stream = stream;
        
        return resolve(stream);
      }).catch((err) => {
        return reject(err);
      });
    });
  }
};
