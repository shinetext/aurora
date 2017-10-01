'use strict';

const assert = require('assert');

describe('ConnectionService', () => {

  describe('#getBaseUrl() - https://test.te.st', () => {
    it('should return https://test.te.st', () => {
      const req = {
        headers: {'x-forwarded-proto': 'https'},
        host: 'test.te.st',
      };
      assert.equal(ConnectionService.getBaseUrl(req), 'https://test.te.st');
    });
  });

  describe('#getBaseUrl() - http://test.te.st:1337', () => {
    it('should return http://test.te.st:1337', () => {
      const req = {
        host: 'test.te.st',
        port: 1337,
      };
      assert.equal(ConnectionService.getBaseUrl(req), 'http://test.te.st:1337');
    });
  });

  describe('#isSecure({})', () => {
    it('should return false', () => {
      const req = {};
      assert.equal(ConnectionService.isSecure(req), false);
    });
  });

  describe('#isSecure(req.connection.encrypted)', () => {
    it('should return true', () => {
      const req = {connection: {encrypted: {}}};
      assert(ConnectionService.isSecure(req));
    });
  });

  describe('#isSecure(req.secure)', () => {
    it('should return true', () => {
      const req = {secure: true};
      assert(ConnectionService.isSecure(req));
    });
  });

  describe("#isSecure(req.headers['x-forwarded-proto'] = 'https')", () => {
    it('should return true', () => {
      const req = {headers: {'x-forwarded-proto': 'https'}};
      assert(ConnectionService.isSecure(req));
    });
  });

  describe("#isSecure(req.headers['x-forwarded-proto'] = 'http')", () => {
    it('should return false', () => {
      const req = {headers: {'x-forwarded-proto': 'http'}};
      assert.equal(ConnectionService.isSecure(req), false);
    });
  });

});