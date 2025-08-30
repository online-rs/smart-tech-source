export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      agentes: {
        Row: {
          comando: string | null
          created_at: string
          funcao: string | null
          id: number
          nome: string | null
          setor: string | null
        }
        Insert: {
          comando?: string | null
          created_at?: string
          funcao?: string | null
          id?: number
          nome?: string | null
          setor?: string | null
        }
        Update: {
          comando?: string | null
          created_at?: string
          funcao?: string | null
          id?: number
          nome?: string | null
          setor?: string | null
        }
        Relationships: []
      }
      andamentos: {
        Row: {
          andamento: string | null
          anexo: string | null
          created_at: string
          descricao: string | null
          id: number
          processo: string | null
          reclamante: string | null
          tipo: string | null
        }
        Insert: {
          andamento?: string | null
          anexo?: string | null
          created_at?: string
          descricao?: string | null
          id?: number
          processo?: string | null
          reclamante?: string | null
          tipo?: string | null
        }
        Update: {
          andamento?: string | null
          anexo?: string | null
          created_at?: string
          descricao?: string | null
          id?: number
          processo?: string | null
          reclamante?: string | null
          tipo?: string | null
        }
        Relationships: []
      }
      andamentos_n8n: {
        Row: {
          arquivada: boolean | null
          created_at: string
          datas: string | null
          decisao: string | null
          email_id: string | null
          id: number
          pendente: boolean | null
          processo: string | null
          reclamante: string | null
          revisar: string | null
        }
        Insert: {
          arquivada?: boolean | null
          created_at?: string
          datas?: string | null
          decisao?: string | null
          email_id?: string | null
          id?: number
          pendente?: boolean | null
          processo?: string | null
          reclamante?: string | null
          revisar?: string | null
        }
        Update: {
          arquivada?: boolean | null
          created_at?: string
          datas?: string | null
          decisao?: string | null
          email_id?: string | null
          id?: number
          pendente?: boolean | null
          processo?: string | null
          reclamante?: string | null
          revisar?: string | null
        }
        Relationships: []
      }
      atas: {
        Row: {
          acordo: string | null
          aud_prosseguimento: string | null
          avaliacao_final: string | null
          created_at: string
          data: string | null
          id: number
          operacao: string | null
          prazos_deferido: string | null
          preposto: string | null
          proc: string | null
          reclamada: string | null
          reclamante: string | null
          resumo_prep: string | null
          resumo_rte: string | null
          resumo_test_rda: string | null
          resumo_test_rte: string | null
          testemunha_rda: string | null
          testemunha_rte: string | null
          valor_total_acordo: string | null
        }
        Insert: {
          acordo?: string | null
          aud_prosseguimento?: string | null
          avaliacao_final?: string | null
          created_at?: string
          data?: string | null
          id?: number
          operacao?: string | null
          prazos_deferido?: string | null
          preposto?: string | null
          proc?: string | null
          reclamada?: string | null
          reclamante?: string | null
          resumo_prep?: string | null
          resumo_rte?: string | null
          resumo_test_rda?: string | null
          resumo_test_rte?: string | null
          testemunha_rda?: string | null
          testemunha_rte?: string | null
          valor_total_acordo?: string | null
        }
        Update: {
          acordo?: string | null
          aud_prosseguimento?: string | null
          avaliacao_final?: string | null
          created_at?: string
          data?: string | null
          id?: number
          operacao?: string | null
          prazos_deferido?: string | null
          preposto?: string | null
          proc?: string | null
          reclamada?: string | null
          reclamante?: string | null
          resumo_prep?: string | null
          resumo_rte?: string | null
          resumo_test_rda?: string | null
          resumo_test_rte?: string | null
          testemunha_rda?: string | null
          testemunha_rte?: string | null
          valor_total_acordo?: string | null
        }
        Relationships: []
      }
      cliente_tarefas: {
        Row: {
          created_at: string
          finalizada: boolean | null
          id: number
          numerowhatsapp_cliente: string | null
          tarefa_data: string | null
          tarefa_desricao: string | null
          tarefa_lembrete1: string | null
          tarefa_lembrete2: string | null
          tarefa_titulo: string | null
        }
        Insert: {
          created_at?: string
          finalizada?: boolean | null
          id?: number
          numerowhatsapp_cliente?: string | null
          tarefa_data?: string | null
          tarefa_desricao?: string | null
          tarefa_lembrete1?: string | null
          tarefa_lembrete2?: string | null
          tarefa_titulo?: string | null
        }
        Update: {
          created_at?: string
          finalizada?: boolean | null
          id?: number
          numerowhatsapp_cliente?: string | null
          tarefa_data?: string | null
          tarefa_desricao?: string | null
          tarefa_lembrete1?: string | null
          tarefa_lembrete2?: string | null
          tarefa_titulo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cliente_tarefas_numerowhatsapp_cliente_fkey"
            columns: ["numerowhatsapp_cliente"]
            isOneToOne: false
            referencedRelation: "cliente_whatsapp"
            referencedColumns: ["numerowhatsapp"]
          },
        ]
      }
      cliente_whatsapp: {
        Row: {
          agente: string | null
          comando_alice: string | null
          Consulta_Status: string | null
          contatar: boolean | null
          CONTATO_FORÇADO: number | null
          contatojusbrasil: number | null
          data_cadastro: string | null
          historico_longo: string | null
          instancia: string | null
          jusbrasil: string | null
          kanbam: string | null
          mensagem_incicial_jusbrasil: string | null
          nome_pessoa: string | null
          numero_mensagens: number | null
          numerowhatsapp: string
          RESUMO: string | null
          resumo_array: string[] | null
          tipo: string | null
          Visto: boolean | null
        }
        Insert: {
          agente?: string | null
          comando_alice?: string | null
          Consulta_Status?: string | null
          contatar?: boolean | null
          CONTATO_FORÇADO?: number | null
          contatojusbrasil?: number | null
          data_cadastro?: string | null
          historico_longo?: string | null
          instancia?: string | null
          jusbrasil?: string | null
          kanbam?: string | null
          mensagem_incicial_jusbrasil?: string | null
          nome_pessoa?: string | null
          numero_mensagens?: number | null
          numerowhatsapp: string
          RESUMO?: string | null
          resumo_array?: string[] | null
          tipo?: string | null
          Visto?: boolean | null
        }
        Update: {
          agente?: string | null
          comando_alice?: string | null
          Consulta_Status?: string | null
          contatar?: boolean | null
          CONTATO_FORÇADO?: number | null
          contatojusbrasil?: number | null
          data_cadastro?: string | null
          historico_longo?: string | null
          instancia?: string | null
          jusbrasil?: string | null
          kanbam?: string | null
          mensagem_incicial_jusbrasil?: string | null
          nome_pessoa?: string | null
          numero_mensagens?: number | null
          numerowhatsapp?: string
          RESUMO?: string | null
          resumo_array?: string[] | null
          tipo?: string | null
          Visto?: boolean | null
        }
        Relationships: []
      }
      commands: {
        Row: {
          created_at: string
          id: string
          instruction: string
          specialty: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          instruction: string
          specialty: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          instruction?: string
          specialty?: string
          user_id?: string | null
        }
        Relationships: []
      }
      comparativos: {
        Row: {
          caracteristicas_comparadas: string[] | null
          conclusao_comparativo: string | null
          created_at: string
          id: string
          produtos_ids: string[]
          titulo: string
          updated_at: string
        }
        Insert: {
          caracteristicas_comparadas?: string[] | null
          conclusao_comparativo?: string | null
          created_at?: string
          id?: string
          produtos_ids: string[]
          titulo: string
          updated_at?: string
        }
        Update: {
          caracteristicas_comparadas?: string[] | null
          conclusao_comparativo?: string | null
          created_at?: string
          id?: string
          produtos_ids?: string[]
          titulo?: string
          updated_at?: string
        }
        Relationships: []
      }
      conversations: {
        Row: {
          assistance: string | null
          column_id: string | null
          created_at: string
          id: string
          name: string
          status: string
          updated_at: string
          user_id: string | null
          utm: string | null
          whatsapp: string | null
        }
        Insert: {
          assistance?: string | null
          column_id?: string | null
          created_at?: string
          id?: string
          name: string
          status?: string
          updated_at?: string
          user_id?: string | null
          utm?: string | null
          whatsapp?: string | null
        }
        Update: {
          assistance?: string | null
          column_id?: string | null
          created_at?: string
          id?: string
          name?: string
          status?: string
          updated_at?: string
          user_id?: string | null
          utm?: string | null
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversations_column_id_fkey"
            columns: ["column_id"]
            isOneToOne: false
            referencedRelation: "kanban"
            referencedColumns: ["id"]
          },
        ]
      }
      despesas: {
        Row: {
          competência: string | null
          created_at: string
          data: string | null
          id: number
          nome: string | null
          tipo: string | null
          valor: number | null
        }
        Insert: {
          competência?: string | null
          created_at?: string
          data?: string | null
          id?: number
          nome?: string | null
          tipo?: string | null
          valor?: number | null
        }
        Update: {
          competência?: string | null
          created_at?: string
          data?: string | null
          id?: number
          nome?: string | null
          tipo?: string | null
          valor?: number | null
        }
        Relationships: []
      }
      despesas_relatórios: {
        Row: {
          competencia: string | null
          created_at: string
          id: number
          liberado: number | null
          limite: number | null
          soma_competencia: number | null
        }
        Insert: {
          competencia?: string | null
          created_at?: string
          id?: number
          liberado?: number | null
          limite?: number | null
          soma_competencia?: number | null
        }
        Update: {
          competencia?: string | null
          created_at?: string
          id?: number
          liberado?: number | null
          limite?: number | null
          soma_competencia?: number | null
        }
        Relationships: []
      }
      documents: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
        }
        Relationships: []
      }
      eventos: {
        Row: {
          Cliente_avisado: boolean | null
          data_evento: string
          descricao_evento: string | null
          id_evento: string
          local_evento: string | null
          numero_processo: string | null
          numerowhatsapp_cliente: string | null
          status_evento: string | null
          tipo_evento: string
        }
        Insert: {
          Cliente_avisado?: boolean | null
          data_evento: string
          descricao_evento?: string | null
          id_evento?: string
          local_evento?: string | null
          numero_processo?: string | null
          numerowhatsapp_cliente?: string | null
          status_evento?: string | null
          tipo_evento: string
        }
        Update: {
          Cliente_avisado?: boolean | null
          data_evento?: string
          descricao_evento?: string | null
          id_evento?: string
          local_evento?: string | null
          numero_processo?: string | null
          numerowhatsapp_cliente?: string | null
          status_evento?: string | null
          tipo_evento?: string
        }
        Relationships: []
      }
      kanban: {
        Row: {
          created_at: string
          id: string
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          title: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          phone: string
          status: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          phone: string
          status?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          phone?: string
          status?: string
        }
        Relationships: []
      }
      mensagens: {
        Row: {
          data_envio: string | null
          id_mensagem: string
          instancia: string | null
          numerowhatsapp_cliente: string
          role: string
          texto_mensagem: string
          tipo_mensagem: string | null
        }
        Insert: {
          data_envio?: string | null
          id_mensagem?: string
          instancia?: string | null
          numerowhatsapp_cliente: string
          role: string
          texto_mensagem: string
          tipo_mensagem?: string | null
        }
        Update: {
          data_envio?: string | null
          id_mensagem?: string
          instancia?: string | null
          numerowhatsapp_cliente?: string
          role?: string
          texto_mensagem?: string
          tipo_mensagem?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_cliente_mensagem"
            columns: ["numerowhatsapp_cliente"]
            isOneToOne: false
            referencedRelation: "cliente_whatsapp"
            referencedColumns: ["numerowhatsapp"]
          },
        ]
      }
      messages: {
        Row: {
          content: string
          conversation_id: string | null
          created_at: string
          id: string
          role: string
        }
        Insert: {
          content: string
          conversation_id?: string | null
          created_at?: string
          id?: string
          role: string
        }
        Update: {
          content?: string
          conversation_id?: string | null
          created_at?: string
          id?: string
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      processos: {
        Row: {
          cliente: string | null
          data_inicio: string | null
          data_ultima_atualizacao: string | null
          descricao: string | null
          FATURA: boolean | null
          id_processo: string
          numero_processo: string | null
          numerowhatsapp_cliente: string
          parte_contraria: string | null
          status_processo: string | null
        }
        Insert: {
          cliente?: string | null
          data_inicio?: string | null
          data_ultima_atualizacao?: string | null
          descricao?: string | null
          FATURA?: boolean | null
          id_processo?: string
          numero_processo?: string | null
          numerowhatsapp_cliente?: string
          parte_contraria?: string | null
          status_processo?: string | null
        }
        Update: {
          cliente?: string | null
          data_inicio?: string | null
          data_ultima_atualizacao?: string | null
          descricao?: string | null
          FATURA?: boolean | null
          id_processo?: string
          numero_processo?: string | null
          numerowhatsapp_cliente?: string
          parte_contraria?: string | null
          status_processo?: string | null
        }
        Relationships: []
      }
      produtos: {
        Row: {
          asin: string | null
          categoria_principal: string | null
          created_at: string
          data_atualizacao: string
          descricao_curta: string | null
          descricao_longa: string | null
          especificacoes_tecnicas: Json | null
          id: string
          imagens_urls: string[] | null
          nome: string
          nota_media: number | null
          numero_avaliacoes: number | null
          palavras_chave_seo: string[] | null
          preco_atual: number | null
          subcategorias: string[] | null
          url_amazon: string | null
        }
        Insert: {
          asin?: string | null
          categoria_principal?: string | null
          created_at?: string
          data_atualizacao?: string
          descricao_curta?: string | null
          descricao_longa?: string | null
          especificacoes_tecnicas?: Json | null
          id?: string
          imagens_urls?: string[] | null
          nome: string
          nota_media?: number | null
          numero_avaliacoes?: number | null
          palavras_chave_seo?: string[] | null
          preco_atual?: number | null
          subcategorias?: string[] | null
          url_amazon?: string | null
        }
        Update: {
          asin?: string | null
          categoria_principal?: string | null
          created_at?: string
          data_atualizacao?: string
          descricao_curta?: string | null
          descricao_longa?: string | null
          especificacoes_tecnicas?: Json | null
          id?: string
          imagens_urls?: string[] | null
          nome?: string
          nota_media?: number | null
          numero_avaliacoes?: number | null
          palavras_chave_seo?: string[] | null
          preco_atual?: number | null
          subcategorias?: string[] | null
          url_amazon?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          age: number | null
          avatar_url: string | null
          city: string | null
          created_at: string
          full_name: string | null
          id: string
          nickname: string | null
          role: Database["public"]["Enums"]["user_role"]
          state: string | null
          updated_at: string
          username: string | null
          whatsapp: string | null
        }
        Insert: {
          age?: number | null
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          nickname?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          state?: string | null
          updated_at?: string
          username?: string | null
          whatsapp?: string | null
        }
        Update: {
          age?: number | null
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          nickname?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          state?: string | null
          updated_at?: string
          username?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      reviews: {
        Row: {
          contras: string[] | null
          created_at: string
          depoimentos_reais: string[] | null
          id: string
          introducao: string | null
          produto_id: string
          pros: string[] | null
          status: string
          titulo_review: string
          updated_at: string
        }
        Insert: {
          contras?: string[] | null
          created_at?: string
          depoimentos_reais?: string[] | null
          id?: string
          introducao?: string | null
          produto_id: string
          pros?: string[] | null
          status?: string
          titulo_review: string
          updated_at?: string
        }
        Update: {
          contras?: string[] | null
          created_at?: string
          depoimentos_reais?: string[] | null
          id?: string
          introducao?: string | null
          produto_id?: string
          pros?: string[] | null
          status?: string
          titulo_review?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_produto_id_fkey"
            columns: ["produto_id"]
            isOneToOne: false
            referencedRelation: "produtos"
            referencedColumns: ["id"]
          },
        ]
      }
      tarefas: {
        Row: {
          created_at: string
          id: number
          tarefa_descricao: string | null
          tarefa_nome: string
          tarefa_prazo: string | null
          tarefa_status: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          tarefa_descricao?: string | null
          tarefa_nome: string
          tarefa_prazo?: string | null
          tarefa_status?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          tarefa_descricao?: string | null
          tarefa_nome?: string
          tarefa_prazo?: string | null
          tarefa_status?: string | null
        }
        Relationships: []
      }
      tarefas_fuleiros: {
        Row: {
          created_at: string
          criador: string | null
          descriçao: string | null
          id: number
          prazo: string | null
        }
        Insert: {
          created_at?: string
          criador?: string | null
          descriçao?: string | null
          id?: number
          prazo?: string | null
        }
        Update: {
          created_at?: string
          criador?: string | null
          descriçao?: string | null
          id?: number
          prazo?: string | null
        }
        Relationships: []
      }
      user_command_limits: {
        Row: {
          created_at: string
          id: string
          max_commands: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          max_commands?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          max_commands?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      get_remaining_commands: {
        Args: { user_id: string }
        Returns: number
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      is_admin: {
        Args: { user_id: string }
        Returns: boolean
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: string
      }
      match_documents: {
        Args: {
          match_count: number
          match_threshold: number
          query_embedding: string
        }
        Returns: {
          content: string
          id: number
          similarity: number
        }[]
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
    }
    Enums: {
      user_role: "user" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      user_role: ["user", "admin"],
    },
  },
} as const
