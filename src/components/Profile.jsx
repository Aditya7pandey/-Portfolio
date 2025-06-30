import React from "react";

function Profile() {
  return (
    <section id="profiles" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          Coding Profiles & Achievements
        </h2>

        {/* Coding Platform Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* LeetCode Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">LC</span>
                </div>
                <h3 className="text-lg font-semibold">LeetCode</h3>
              </div>
              <a
                href="https://leetcode.com/adityapandey18501"
                className="text-orange-600 hover:text-orange-800 text-sm font-medium"
              >
                View Profile →
              </a>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Problems Solved</span>
                <span className="font-semibold text-orange-600">180+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Contest Rating</span>
                <span className="font-semibold text-orange-600">1379</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Max Streak</span>
                <span className="font-semibold text-orange-600">72 days</span>
              </div>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GH</span>
                </div>
                <h3 className="text-lg font-semibold">GitHub</h3>
              </div>
              <a
                href="https://github.com/yourusername"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                View Profile →
              </a>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Public Repos</span>
                <span className="font-semibold text-gray-900">25</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Followers</span>
                <span className="font-semibold text-gray-900">150</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Stars</span>
                <span className="font-semibold text-gray-900">85</span>
              </div>
            </div>
          </div>

          {/* CodeChef/Codeforces Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CF</span>
                </div>
                <h3 className="text-lg font-semibold">Codeforces</h3>
              </div>
              <a
                href="https://codeforces.com/profile/yourusername"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View Profile →
              </a>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Rating</span>
                <span className="font-semibold text-blue-600">1400</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Max Rating</span>
                <span className="font-semibold text-blue-600">1550</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Contests</span>
                <span className="font-semibold text-blue-600">35</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
