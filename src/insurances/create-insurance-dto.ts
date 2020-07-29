import { ApiProperty } from "@nestjs/swagger";

export class CreateInsuranceDto {
    @ApiProperty({
        description: "Card Number"
    })
    cardNumber?: string;
    @ApiProperty({
        description: "Name"
    })
    name?: string;
    @ApiProperty({
        description: "Type"
    })
    type?: string;
}
