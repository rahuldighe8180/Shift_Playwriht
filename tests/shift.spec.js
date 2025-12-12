import { test } from '@playwright/test';
import { LoginPage } from './module/login/loginPage';
import { DashboardPage } from './module/dashboard/dashboardPage';
import { SelfConfigPage } from './module/config/selfConfigPage';
import { ShiftPage } from './module/config/shiftPage';

 test.use({
  viewport: { width: 1200, height: 600 },
  launchOptions: { slowMo: 700 }
});
 
test.setTimeout(110000);


test('Create Rate - Shift', async ({ page }) => {

  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const config = new SelfConfigPage(page);
  const shift = new ShiftPage(page);

  await login.goto();
  await login.login('admin', 'Admin@Simplify');

  await dashboard.openProgram('codeN');
  await dashboard.openDashboard();
  await dashboard.openSelfConfig();

  await config.openRate();
  await config.openRateType();
  await config.openShiftList();

  await shift.createShift('Morning', '10:30');

});
