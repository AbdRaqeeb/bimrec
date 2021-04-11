import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { JwtDto } from '../dto/jwt.dto';
import { jwtConstants } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate({ id, role }: JwtDto) {
    let user;
    if (role === 'patient') {
      user = await this.authService.validatePatient(id);
    }

    if (role === 'hospital') {
      user = await this.authService.validateHospital(id);
    }

    if (role === 'doctor') {
      user = await this.authService.validateDoctor(id);
    }

    if (!user) {
      throw new UnauthorizedException(
        `User can not access route. No headers token`,
      );
    }

    return user;
  }
}
