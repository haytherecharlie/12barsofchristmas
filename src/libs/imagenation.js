/**
 * Imagenation | Upload image files from camera or library
 * and scale them to any custom size - all on the front end.
 */
export default function imagenation(imageFile, resize = 200) {
  if (typeof window !== "undefined") {
    const fileReader = new FileReader()
    const newImage = new Image()

    /**
     * Create a canvas and use the resize param to scale the original
     * image - the return the data url of the canvas.
     */
    function createCanvasDataUrl(newImage) {
      const ratio = Math.floor(resize * (newImage.width / newImage.height))
      const canvas = document.createElement("canvas")
      const context = canvas.getContext("2d")
      canvas.width = ratio
      canvas.height = resize
      context.save()
      context.drawImage(newImage, 0, 0, ratio, resize)
      context.restore()
      return canvas.toDataURL()
    }

    /**
     * Use fileReader to read in the imagefile and then assign it to a new
     * image that can be converted into a dataUrl.
     */
    return new Promise((resolve, reject) => {
      try {
        fileReader.onload = () => {
          newImage.onload = () => resolve(createCanvasDataUrl(newImage))
          newImage.src = URL.createObjectURL(imageFile)
        }

        fileReader.readAsArrayBuffer(imageFile)
      } catch (err) {
        return reject(err)
      }
    })
  }
}
