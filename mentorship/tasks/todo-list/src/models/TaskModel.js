export class TaskModel {
  constructor({title,description,effectiveDate, endDate}) {
    this.id = Math.random().toString()
    this.title = title
    this.description = description
    this.effectiveDate = effectiveDate
    this.endDate = endDate || ''
  }
}