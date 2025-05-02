import { DataSource, DataSourceOptions } from 'typeorm';
import DataSourceConfig from './data-source-config';

export default new DataSource(DataSourceConfig as DataSourceOptions);
