import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test.describe('TodoMVC CRUD operations', () => {
  let todoPage: TodoPage;

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto();
  });

  test('Create todo', async () => {
    await todoPage.addTodo('Learn Playwright');
    await expect(todoPage.todoItems).toHaveCount(1);
    await expect(todoPage.todoItems.first()).toContainText('Learn Playwright');
  });

  test('Update todo', async () => {
    await todoPage.addTodo('Old Task');
    await todoPage.editTodo(0, 'Updated Task');
    await expect(todoPage.todoItems.first()).toContainText('Updated Task');
  });

  test('Complete todo', async () => {
    await todoPage.addTodo('Task to complete');
    await todoPage.completeTodo(0);
    await expect(todoPage.todoItems.first()).toHaveClass(/completed/);
  });

  test('Delete todo', async () => {
    await todoPage.addTodo('Task to delete');
    await todoPage.deleteTodo(0);
    await expect(todoPage.todoItems).toHaveCount(0);
  });
});
