require 'rails_helper'

RSpec.describe 'API Universities', type: :request do

  # let!(:universities) { FactoryBot.create_list(:university, 20) }

  API_KEY = "WCZZYjnOQFUYfJIN2ShH1iD24UHo58A6TI"
  let(:university_id) { 1 }
  # Test suite for GET /universities
  describe 'GET /api/v1/universities' do
    before { get '/api/v1/universities', headers: { 'x-api-token': API_KEY } }

    it 'returns universities' do
      expect(json['universities']).not_to be_empty
      expect(json['universities'].size).to eq(4)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /v1/universities/:id
  describe 'GET /api/v1/universities/:id' do
    before { get "/api/v1/universities/#{university_id}", headers: { 'x-api-token': API_KEY } }

    context 'when the record exists' do
      it 'returns the universities' do
        expect(json['university']).not_to be_empty
        expect(json['university']['id']).to eq(university_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:university_id) { 100123 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/not_found/)
      end
    end
  end

end