package med.voll.api.domain.medico;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import med.voll.api.domain.endereco.Endereco;
import med.voll.api.domain.endereco.DadosEndereco;

public record DadosCadastroMedico(
  @NotBlank
  String nome,

  @NotBlank
  @Email
  String email,

  @NotBlank
  String telefone,

  @NotBlank
  @Pattern(regexp = "\\d{4,6}")
  String crm,

  @NotNull
  Especialidade especialidade,

  @NotNull
  @Valid
  DadosEndereco endereco,

  Boolean ativo
) {

  public Medico toDomain() {
    Medico medico = new Medico(
      null ,
      nome,
      email,
      telefone,
      crm,
      especialidade,
      new Endereco(
        endereco.logradouro(),
        endereco.bairro(),
        endereco.cep(),
        endereco.numero(),
        endereco.complemento(),
        endereco.cidade(),
        endereco.uf()
      ),
      true
    );

    System.out.println("MEDICO = " + medico);

    return medico;
  }
}

