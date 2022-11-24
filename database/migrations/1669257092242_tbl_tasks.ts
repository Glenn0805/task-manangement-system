import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tbl_tasks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('task_id')
      table.string('task_name')
      table.integer('assignee_id')
      table.integer('qa_assignee_id')
      table.date('completion_date')
      table.string('status_id')
      table.string('task_type_id')
      table.timestamps()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
