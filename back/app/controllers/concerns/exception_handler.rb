# 200: OK. Tudo funcionou conforme o esperado;
# 201: Um recurso foi criado com êxito em resposta a uma requisição POST. O cabeçalho location contém a URL que aponta para o recurso recém-criado;
# 204: A requisição foi tratada com sucesso e a resposta não contém nenhum conteúdo no corpo (por exemplo uma requisição DELETE);
# 304: O recurso não foi modificado. Você pode usar a versão em cache;
# 400: Requisição malfeita. Isto pode ser causado por várias ações por parte do usuário, tais como o fornecimento de um JSON inválido no corpo da requisição, fornecendo parâmetros inválidos, etc;
# 401: Falha de autenticação;
# 403: O usuário autenticado não tem permissão para acessar o recurso da API solicitado;
# 404: O recurso requisitado não existe;
# 405: Método não permitido. Favor verificar o cabeçalho Allow para conhecer os métodos HTTP permitidos;
# 415: Tipo de mídia não suportada. O número de versão ou o content type requisitado são inválidos;
# 422: Falha na validação dos dados (na resposta a uma requisição POST, por exemplo). Por favor, verifique o corpo da resposta para visualizar a mensagem detalhada do erro;
# 429: Excesso de requisições. A requisição foi rejeitada devido a limitação de taxa;
# 500: Erro interno do servidor. Isto pode ser causado por erros internos do programa.

module ExceptionHandler
  extend ActiveSupport::Concern

  included do
    rescue_from Exception do |error|
      json_response({
        status: :internal_server_error,
        code: 500,
        message: error.message
        }, 
        :internal_server_error)
    end

    rescue_from ActiveRecord::RecordNotFound do |error|
      json_response({
        status: :not_found,
        code: 404,
        message: error.message
        }, 
        :not_found)
    end

    rescue_from ActiveRecord::RecordInvalid do |error|
      json_response( {
        status: :unprocessable_entity,
        code: 422,
        message: error.message
        }, 
        :unprocessable_entity)
    end
  end
end
