import { Page, Locator } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export class TodoPage {
  readonly page: Page;
  readonly newTodoInput: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodoInput = page.locator('.new-todo');
    this.todoItems = page.locator('.todo-list li');
  }

  async goto() {
    await this.page.goto(BASE_URL);
    await this.page.waitForSelector('.new-todo', { state: 'visible', timeout: 10000 });
  }

  async addTodo(text: string) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }

  async editTodo(index: number, newText: string) {
    const item = this.todoItems.nth(index);
    await item.dblclick();
    const editInput = item.locator('.edit');
    await editInput.fill(newText);
    await editInput.press('Enter');
  }

  async completeTodo(index: number) {
    await this.todoItems.nth(index).locator('.toggle').check();
  }

  async deleteTodo(index: number) {
    const item = this.todoItems.nth(index);
    await item.hover();
    await item.locator('.destroy').click();
  }
}
