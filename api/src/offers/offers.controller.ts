import { Controller, Param, Get, Post } from "@nestjs/common";
import { OffersService } from "./offers.service";
import { Offer } from "./offer.entity";

@Controller("offers")
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Post("project/:projectId/user/:userId")
  async createOffer(
    @Param("projectId") projectId: number,
    @Param("userId") userId: number
  ): Promise<Offer> {
    return this.offersService.createOffer(projectId, userId);
  }

  @Get("user/:userId")
  async getOffersForUser(@Param("userId") userId: number) {
    return this.offersService.getOffers(userId);
  }
}
