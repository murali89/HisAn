// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('[set] color: ', '#3aa757');
  });

  chrome.storage.sync.get(['color'], function(data) {
    console.log('[get] color: ', data.color);
  });


  chrome.history.search({text: '', maxResults: 1000}, function(data) {
    console.log('Got your browser history, sucker!');
    data.forEach(function(page) {
        console.log(page.url);
    });
});
});
