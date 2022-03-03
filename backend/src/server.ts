import App from '@/app';
import { ManufacturingUnitsController } from '@/controllers/manufacturingUnits.controller';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([ManufacturingUnitsController]);
app.listen();
