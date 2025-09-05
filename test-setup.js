#!/usr/bin/env node

/**
 * Simple setup verification script
 * Run this to verify the skeleton is working correctly
 */

const http = require('http');

console.log('🧪 Testing InScope URL Shortener Setup...\n');

// Test backend server
function testBackend() {
  return new Promise((resolve, reject) => {
    const req = http.get('http://localhost:3001/health', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('✅ Backend server is running on port 3001');
          resolve(true);
        } else {
          console.log('❌ Backend server responded with status:', res.statusCode);
          resolve(false);
        }
      });
    });
    
    req.on('error', (err) => {
      console.log('❌ Backend server is not running on port 3001');
      console.log('   Make sure to run: npm run server');
      resolve(false);
    });
    
    req.setTimeout(5000, () => {
      req.destroy();
      console.log('❌ Backend server request timed out');
      resolve(false);
    });
  });
}

// Test frontend server
function testFrontend() {
  return new Promise((resolve, reject) => {
    const req = http.get('http://localhost:3000', (res) => {
      if (res.statusCode === 200) {
        console.log('✅ Frontend server is running on port 3000');
        resolve(true);
      } else {
        console.log('❌ Frontend server responded with status:', res.statusCode);
        resolve(false);
      }
    });
    
    req.on('error', (err) => {
      console.log('❌ Frontend server is not running on port 3000');
      console.log('   Make sure to run: npm run client');
      resolve(false);
    });
    
    req.setTimeout(5000, () => {
      req.destroy();
      console.log('❌ Frontend server request timed out');
      resolve(false);
    });
  });
}

async function runTests() {
  const backendOk = await testBackend();
  const frontendOk = await testFrontend();
  
  console.log('\n📊 Setup Verification Results:');
  console.log('================================');
  
  if (backendOk && frontendOk) {
    console.log('🎉 All systems are running correctly!');
    console.log('   Frontend: http://localhost:3000');
    console.log('   Backend:  http://localhost:3001');
    console.log('\n✨ Ready to start coding! Good luck!');
  } else {
    console.log('⚠️  Some services are not running properly.');
    console.log('   Try running: npm run dev');
    console.log('   Or check the individual services with:');
    console.log('   - npm run client (for frontend)');
    console.log('   - npm run server (for backend)');
  }
}

runTests().catch(console.error);
