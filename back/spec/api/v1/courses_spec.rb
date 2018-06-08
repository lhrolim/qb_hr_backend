require 'rails_helper'

RSpec.describe 'API Courses', type: :request do

  # let!(:courses) { FactoryBot.create_list(:course, 20) }

  API_KEY = "WCZZYjnOQFUYfJIN2ShH1iD24UHo58A6TI"
  let(:course_id) { 1 }
  # Test suite for GET /courses
  describe 'GET /api/v1/courses' do
    before { get '/api/v1/courses', headers: { 'x-api-token': API_KEY } }

    it 'returns courses' do
      expect(json['courses']).not_to be_empty
      expect(json['courses'].size).to eq(9)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /v1/courses/:id
  describe 'GET /api/v1/courses/:id' do
    before { get "/api/v1/courses/#{course_id}", headers: { 'x-api-token': API_KEY } }

    context 'when the record exists' do
      it 'returns the courses' do
        expect(json['course']).not_to be_empty
        expect(json['course']['id']).to eq(course_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:course_id) { 100123 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/not_found/)
      end
    end
  end

end