import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }

  public async getUserInfo() {
    const result = await this.app.mysql.query('select * from userinfo');
    return result;
  }
}
