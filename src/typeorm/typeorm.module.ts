import { TypeOrmModule } from '@nestjs/typeorm';
import DataSourceConfig from './data-source-config';

export default (() => {
  console.debug(DataSourceConfig);
  return TypeOrmModule.forRoot(DataSourceConfig);
})();
