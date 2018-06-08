require 'rails_helper'

RSpec.describe 'API Offers', type: :request do

  # let!(:offers) { FactoryBot.create_list(:offer, 20) }

  API_KEY = "WCZZYjnOQFUYfJIN2ShH1iD24UHo58A6TI"
  let(:offer_id) { 1 }
  # Test suite for GET /offers
  describe 'GET /api/v1/offers' do
    before { get '/api/v1/offers', headers: { 'x-api-token': API_KEY } }

    it 'returns offers' do
      expect(json['offers']).not_to be_empty
      expect(json['offers'].size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /v1/offers/:id
  describe 'GET /api/v1/offers/:id' do
    before { get "/api/v1/offers/#{offer_id}", headers: { 'x-api-token': API_KEY } }

    context 'when the record exists' do
      it 'returns the offers' do
        expect(json['offer']).not_to be_empty
        expect(json['offer']['id']).to eq(offer_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:offer_id) { 100123 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/not_found/)
      end
    end
  end

end