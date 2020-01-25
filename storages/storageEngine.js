class StorageEngine {
  constructor({ bucketName, rename }) {
    this.bucketName = bucketName
    this.rename = rename
  }

  _nameFile(req, file) {
    if (!this.rename)
      return `${Date.now()}-${file.originalname}`
    else if (typeof this.rename !== 'function')
      return `${Date.now()}-${this.rename}`
    else
      return this.rename(req, file)
  }
}

module.exports = StorageEngine
