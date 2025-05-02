import { TypeOrmModule } from '@nestjs/typeorm';
import DataSourceConfig from './data-source-config';

export default (() => {
  return TypeOrmModule.forRoot(DataSourceConfig);
})();
